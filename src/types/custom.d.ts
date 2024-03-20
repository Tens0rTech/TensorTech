declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>> | any;
  export default content;
}

declare module "*.png" {
  const content: any;
  export default content;
}

declare module "*.webp" {
  const content: any;
  export default content;
}
