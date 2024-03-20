import { SlideContainer } from "./style";

type SlideProps = {
  props: any;
  image: string;
};

export default function Slide({ props, image }: SlideProps) {
  const { index, ...otherProps } = props;

  return (
    <SlideContainer {...otherProps}>
      <img src={image} alt={image} />
    </SlideContainer>
  );
}
