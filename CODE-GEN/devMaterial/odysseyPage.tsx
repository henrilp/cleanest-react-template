import React from "react";
// import { KapixContainer as KaContainer } from "@henrilp/kapix-components-react";

export const OdysseyPage = () => {
  return (
    <KaContainer code="k-home" data="kHome" options={{ overflow: `y` }}>
      <KaContainer code="k-sans-titre">
        <KaContainer
          code="k-conteneur"
          options={{
            overflow: `hidden`,
            bgType: 1,
            videoOptions: {
              src: `https://m.media-amazon.com/images/G/01/xmM9E6ZZp2x76/LostArk-ed62cf01-3dbd-4ed3-b8d2-06053a620b3b/LA_Launch_Gameplay_GA_0ee2d503-6354-4bc6-b79b-53a6b1ec18e3_CB1198675309_v2_XL_2._CB1644279079_.webm`,
            },
          }}
          xs={{ overflow: null }}
          simple
        >
          <KaContainer
            code="k-unify-flex-row"
            options={{ flexDirection: `column` }}
          >
            <KaImage
              code="k-image-1"
              options={{
                animationIn: `fadeIn`,
                lazyOptions: {
                  throttle: 200,
                  once: true,
                  intersection: { threshold: 0.1 },
                },
                alt: `Image 1`,
              }}
            >
              https://ucarecdn.com/78c930a7-4bd4-43cb-a2d1-225a7e63ed41/-/preview/-/quality/smart/
            </KaImage>
            <KaContainer
              code="k-container-1"
              options={{ flexDirection: `row` }}
              xs={{ flexDirection: null }}
            >
              <KaButton code="k-button-7" options={{ click: kButton7Click }}>
                {`jouez gratuitement dès maintenant`}
              </KaButton>
              <KaButton
                code="k-button-8"
                options={{
                  buttonIcon: `fab fa-youtube`,
                  style: { color: "white" },
                }}
              >
                {`regarder la bande annonce`}
              </KaButton>
            </KaContainer>
            <KaText
              code="k-texte"
              options={
                {
                  //animation: `left-rotation`,
                }
              }
            >
              {`Votre odyssée commence`}
            </KaText>
          </KaContainer>
        </KaContainer>
      </KaContainer>
    </KaContainer>
  );
};
