import useMarkDelivered from "../hooks/useMarkDelivered";

interface Props {
  shipmentId: string;
}

const MarkDeliveredButton = ({ shipmentId }: Props) => {
  const { markDelivered, loading } = useMarkDelivered();

  const handleClick = () => markDelivered(shipmentId);

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="mark-delivered-button"
    >
      {loading ? (
        <>
          <div className="mark-delivered-spinner" />
          <span>Marking...</span>
        </>
      ) : (
        <>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 1V8L11 5M8 15C11.866 15 15 11.866 15 8C15 4.134 11.866 1 8 1C4.134 1 1 4.134 1 8C1 11.866 4.134 15 8 15Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Mark Delivered</span>
        </>
      )}
    </button>
  );
};

export default MarkDeliveredButton;
