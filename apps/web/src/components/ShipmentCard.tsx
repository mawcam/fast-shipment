import type { Shipment } from "../lib/types";
import { formatDate, getStatusLabel } from "../lib/utils";
import Clock from "./Icons/Clock";
import Destination from "./Icons/Destination";
import MarkDeliveredButton from "./MarkDeliveredButton";

type Props = {
  shipment: Shipment;
};

const ShipmentCard = ({ shipment }: Props) => {
  const getStatusClass = (status: string) => {
    switch (status) {
      case "delayed":
        return "status-delayed";
      case "on-time":
        return "status-on-time";
      case "in-transit":
        return "status-in-transit";
      default:
        return "";
    }
  };

  return (
    <div className={`card ${getStatusClass(shipment.status)}`}>
      <div className="card-header">
        <div className="card-content">
          <div className="card-origin">
            <div className="card-status-indicator" />
            <h3 className="card-origin-title">{shipment.origin}</h3>
          </div>
          <div className="card-destination">
            <Destination />
            <p className="card-destination-text">{shipment.destination}</p>
          </div>
        </div>

        <div className="card-status">
          <span className="card-status-text">
            {getStatusLabel(shipment.status)}
          </span>
        </div>
      </div>

      <div className="card-bottom">
        <div className="card-info">
          <div className="card-eta">
            <Clock />
            <span>ETA: {formatDate(shipment.eta)}</span>
          </div>
          {shipment.deliveredAt && (
            <div className="card-delivered">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 4.5L6 12L2.5 8.5"
                  stroke="#16a34a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Delivered: {formatDate(shipment.deliveredAt)}</span>
            </div>
          )}
        </div>

        {shipment.status === "in-transit" && (
          <MarkDeliveredButton shipmentId={shipment.id} />
        )}
      </div>
    </div>
  );
};

export default ShipmentCard;
