export interface IProps {
    loading: boolean;
    handleSubmit: (email: string, password: string) => void;
}