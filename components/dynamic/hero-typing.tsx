import { TypeAnimation } from "react-type-animation";

export function HeroTyping() {
  return (
    <TypeAnimation
      preRenderFirstString={true}
      sequence={[
        "Business",
        2000,
        "Product",
        2000,
        "Company",
        2000,
        "Brand",
        2000,
      ]}
      speed={{ type: "keyStrokeDelayInMs", value: 100 }}
      repeat={Infinity}
    />
  );
}
