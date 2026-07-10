import { useEffect, useRef, useState } from "react";

const PAYPAL_SCRIPT =
  "https://www.paypal.com/sdk/js?client-id=BAAgxUyCfg-MWtvw5rOiz50I9dS6UUMe8TSbkNnZA7iaBn0lCTf0q3V_YAPTNeGt4FmFuIFo7U_HDtkxAY&components=hosted-buttons&disable-funding=venmo&currency=USD";

let paypalScriptPromise;

const loadPayPalScript = () => {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("PayPal solo puede cargarse en el navegador."));
  }

  if (window.paypal?.HostedButtons) {
    return Promise.resolve(window.paypal);
  }

  if (paypalScriptPromise) {
    return paypalScriptPromise;
  }

  paypalScriptPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector(
      'script[data-paypal-hosted-buttons="true"]'
    );

    if (existingScript) {
      existingScript.addEventListener("load", () => {
        if (window.paypal?.HostedButtons) {
          resolve(window.paypal);
        } else {
          reject(new Error("El SDK de PayPal cargó sin HostedButtons."));
        }
      });

      existingScript.addEventListener("error", () => {
        reject(new Error("No se pudo cargar el SDK de PayPal."));
      });

      return;
    }

    const script = document.createElement("script");
    script.src = PAYPAL_SCRIPT;
    script.async = true;
    script.crossOrigin = "anonymous";
    script.dataset.paypalHostedButtons = "true";

    script.onload = () => {
      if (window.paypal?.HostedButtons) {
        resolve(window.paypal);
      } else {
        reject(new Error("El SDK de PayPal cargó sin HostedButtons."));
      }
    };

    script.onerror = () => {
      paypalScriptPromise = undefined;
      reject(new Error("No se pudo cargar el SDK de PayPal."));
    };

    document.body.appendChild(script);
  });

  return paypalScriptPromise;
};

const PayPalButton = ({
  hostedButtonId,
  programName,
  price,
  footerText = "Después del pago podrás continuar con el proceso de agenda.",
}) => {
  const containerRef = useRef(null);
  const renderedRef = useRef(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    const renderPayPalButton = async () => {
      try {
        setError("");

        if (!hostedButtonId || !containerRef.current) {
          return;
        }

        const paypal = await loadPayPalScript();

        if (cancelled || renderedRef.current || !containerRef.current) {
          return;
        }

        containerRef.current.innerHTML = "";

        await paypal
          .HostedButtons({
            hostedButtonId,
          })
          .render(containerRef.current);

        if (!cancelled) {
          renderedRef.current = true;
        }
      } catch (err) {
        console.error(
          `Error al cargar el botón de PayPal ${hostedButtonId}:`,
          err
        );

        if (!cancelled) {
          setError("No se pudo cargar el botón de pago. Recargá la página.");
        }
      }
    };

    renderPayPalButton();

    return () => {
      cancelled = true;
      renderedRef.current = false;

      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [hostedButtonId]);

  return (
    <div className="bg-white rounded-[28px] p-[24px] shadow-lg border border-white/80 w-full">
      <div className="text-center mb-[18px]">
        <span className="inline-block text-[13px] uppercase tracking-[1.5px] text-[#C2877E] font-bold mb-[8px]">
          Pago seguro
        </span>

        {programName && (
          <h5 className="text-[24px] font-extrabold text-[#2BA6B3] leading-tight">
            {programName}
          </h5>
        )}

        {price && (
          <p className="text-[34px] font-extrabold text-[#222] mt-[8px]">
            {price}
          </p>
        )}
      </div>

      <div
        ref={containerRef}
        data-hosted-button-id={hostedButtonId}
        className="w-full min-h-[45px]"
      />

      {error && (
        <p className="text-[13px] text-red-600 leading-[1.5] text-center mt-[12px]">
          {error}
        </p>
      )}

      <p className="text-[13px] text-[#777] leading-[1.5] text-center mt-[16px]">
        {footerText}
      </p>
    </div>
  );
};

export default PayPalButton;