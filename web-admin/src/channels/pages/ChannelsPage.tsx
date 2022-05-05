import { Link } from "react-router-dom";
import ChannelsList from "../components/ChannelsList";

const ChannelsPage = () => {
  return (
    <div className="py-12">
      <div className="">
        <div className="pb-5 border-b border-plum-200 sm:flex sm:items-center sm:justify-between">
          <h3 className="text-2xl leading-6 font-medium text-light-plum">
            Channels
          </h3>
          <div className="mt-3 sm:mt-0 sm:ml-4">
            <Link
              to="/admin/channels/open"
              className="btn-orange"
            >
              Open Channel
            </Link>
          </div>
        </div>
      </div>
      <div className="py-4 relative">
        <div className="bg-gray-accent2 -mx-4 sm:mx-0 sm:rounded-xl overflow-x-auto">
          <ChannelsList />
        </div>
      </div>
    </div>
  );
};

export default ChannelsPage;
