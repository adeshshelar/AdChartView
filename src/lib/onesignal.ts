export const initOneSignal = () => {
  if (typeof window === "undefined") return;

  // Prevent multiple initializations
  if ((window as any).OneSignalInitialized) return;
  (window as any).OneSignalInitialized = true;

  (window as any).OneSignalDeferred = (window as any).OneSignalDeferred || [];
  (window as any).OneSignalDeferred.push(function (OneSignal: any) {
    OneSignal.init({
      appId: process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID!,
      safari_web_id: process.env.NEXT_PUBLIC_ONESIGNAL_SAFARI_ID, // optional
      allowLocalhostAsSecureOrigin: true,
      notifyButton: {
        enable: true,
      },
    });
  });
};
