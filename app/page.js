import CouponHero from "@/components/CouponHero";
import CustomersFeedback from "@/components/CustomersFeedback";
import PopularCoupons from "@/components/PopularCoupons";
import TopStores from "@/components/TopStores";

export default function Home() {
  return (
    <>
      <CouponHero />
      <PopularCoupons />
      <TopStores />
      <CustomersFeedback />
    </>
  );
}
