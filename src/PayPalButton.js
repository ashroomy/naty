import { useEffect, useRef } from "react";
import Script from "next/script";

const PayPalButton = () => {
  const rendered = useRef(false);

  const renderButton = () => {
    if (rendered.current) return;
    if (typeof window === "undefined") return;
    if (!window.paypal || !window.paypal.HostedButtons) return;

    rendered.current = true;

    window.paypal.HostedButtons({
      hostedButtonId: "KGLDUQJ4DN4A4",
    }).render("#paypal-container-KGLDUQJ4DN4A4");
  };

  useEffect(() => {
    const timer = setInterval(renderButton, 300);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Script
        src="https://www.paypal.com/sdk/js?client-id=BAAgxUyCfg-MWtvw5rOiz50I9dS6UUMe8TSbkNnZA7iaBn0lCTf0q3V_YAPTNeGt4FmFuIFo7U_HDtkxAY&components=hosted-buttons&disable-funding=venmo&currency=USD"
        strategy="afterInteractive"
        onLoad={renderButton}
      />

      <div className="bg-white rounded-[28px] p-[24px] shadow-lg border border-white/80 w-full">
        <div className="text-center mb-[18px]">
          <span className="inline-block text-[13px] uppercase tracking-[1.5px] text-[#C2877E] font-bold mb-[8px]">
            Pago seguro
          </span>
          <h5 className="text-[24px] font-extrabold text-[#2BA6B3] leading-tight">
            
          </h5>
          <p className="text-[34px] font-extrabold text-[#222] mt-[8px]">
            
          </p>
        </div>

        <div id="paypal-container-KGLDUQJ4DN4A4"></div>

        <p className="text-[13px] text-[#777] leading-[1.5] text-center mt-[16px]">
          Después del pago podrás agendar tu valoración inicial virtual.
        </p>
      </div>
    </>
  );
};

export default PayPalButton;