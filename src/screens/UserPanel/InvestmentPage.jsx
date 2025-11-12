import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../../redux/slices/loadingSlice";
import InvestmentModal from "../../components/Screen/UserPanel/InvestmentModal";
import PlanCard from "../../components/Screen/UserPanel/PlanCard";
import { getPackageInfo } from "../../api/user.api";
import { getMoneySymbol } from "../../utils/additionalFunc";
import { STAKING_PACKAGES } from "../../constants/packagesAndRewards";

const InvestmentPage = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [plans, setPlans] = useState([]);

  // Static data to fallback to in case the API fails - using new staking packages structure
  const staticPlans = STAKING_PACKAGES.map((pkg) => ({
    id: pkg.id,
    title: pkg.title,
    min: pkg.min,
    max: pkg.max,
    profitPercentage: pkg.stakingProfit,
    stakingProfit: pkg.stakingProfit,
    miningProfit: pkg.miningProfit,
    maxReturn: pkg.maxReturn,
    limit: `Max ${pkg.maxReturn}%`,
    recommended: pkg.id === 3, // Package 3 is recommended
    features: [
      `${pkg.stakingProfit}% daily staking profit`,
      `${pkg.miningProfit}% daily mining profit`,
      `Investment range: ${getMoneySymbol()}${pkg.min} – ${pkg.max === Infinity ? "∞" : getMoneySymbol() + pkg.max}`,
      `Maximum return: ${pkg.maxReturn}%`,
      "Eligible for Direct Connect Bonus",
      "Eligible for Network Growth Reward",
    ],
  }));

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

  const fetchPackageInfo = async () => {
    try {
      dispatch(setLoading(true));
      const response = await getPackageInfo();
      console.log("API Response:", response);
      
      const rawPlans = response?.data || response?.packages || response;
      
      // Check if response is an array or has data property
      if (!rawPlans || !Array.isArray(rawPlans)) {
        console.warn("⚠️ Invalid API response format");
        setPlans([]);
        return;
      }

      // Transform API response to match PlanCard component format
      const transformedPlans = rawPlans
        .filter((plan) => plan.status !== false) // Filter out inactive plans
        .map((plan) => ({
          _id: plan._id,
          id: plan.id || plan._id,
          title: plan.title || "Plan",
          min: plan.minAmount || plan.min || 0,
          max: plan.maxAmount === Infinity ? Infinity : plan.maxAmount || plan.max || Infinity,
          profitPercentage: plan.percentage || plan.profitPercentage || 0,
          perDayRoi: plan.perDayRoi || 0,
          limit: "Up to 3X",
          recommended: plan.title?.toLowerCase() === "standard" || plan.recommended || false,
          status: plan.status !== false,
          features: [
            `${plan.percentage || plan.profitPercentage || 0}% return on investment`,
            `Investment range: ${getMoneySymbol()}${plan.minAmount || plan.min || 0} – ${
              plan.maxAmount === Infinity || plan.max === Infinity
                ? "∞"
                : `${getMoneySymbol()}${plan.maxAmount || plan.max || 0}`
            }`,
            plan.tags && plan.tags.length > 0 ? `Tags: ${plan.tags.join(", ")}` : "",
            `Per day ROI: ${getMoneySymbol()}${plan.perDayRoi || 0}`,
            plan.status ? "Active plan" : "Inactive plan",
          ].filter(Boolean), // Remove empty strings
        }));

      if (transformedPlans.length > 0) {
        setPlans(transformedPlans);
        console.log("✅ Dynamic plans loaded from API:", transformedPlans.length);
      } else {
        console.warn("⚠️ API returned empty array, showing empty state");
        setPlans([]); // Empty array - no static fallback
      }
    } catch (error) {
      console.error("❌ Error fetching package info:", error);
      // Don't use static data - show empty state
      setPlans([]);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    fetchPackageInfo();
  }, []);

  return (
    <div className="space-y-8 pt-4">
      <div>
        <h1 className="text-3xl font-bold text-white">Investment Plans</h1>
        <p className="text-slate-400 mt-1">
          Choose a plan that fits your strategy and start earning.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} onSelect={handleSelectPlan} />
        ))}
      </div>

      {isModalOpen && (
        <InvestmentModal plan={selectedPlan} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default InvestmentPage;
