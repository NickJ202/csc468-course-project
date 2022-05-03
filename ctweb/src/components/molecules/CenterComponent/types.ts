export interface IProps {
  header: string;
  imageSrc: string;
  information?: string;
  handleAction?: () => void;
  actionLabel: string;
}
