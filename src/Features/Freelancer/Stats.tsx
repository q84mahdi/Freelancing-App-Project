import { HiCheck, HiCollection, HiCurrencyDollar } from "react-icons/hi";
import Stat from "../../UI/Stat";
import { toPersianNumbersWithComma } from "../../Utils/toPersianNumbers";
import type { Proposal } from "../../Types/proposalTypes";

interface StatesProps {
  proposals: Proposal[];
}

function Stats({ proposals }: StatesProps) {
  const numOfProposals = proposals.length;

  const acceptedProposals = proposals.filter(
    (proposals) => proposals.status === 2,
  );

  const balance = acceptedProposals.reduce((acc, curr) => curr.price + acc, 0);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
      <Stat
        icon={<HiCollection className="h-16 w-16" />}
        title="درخواست ها"
        value={numOfProposals}
        color="yellow"
      />

      <Stat
        icon={<HiCheck className="h-16 w-16" />}
        title="درخواست های تایید شده"
        value={acceptedProposals.length}
        color="green"
      />

      <Stat
        icon={<HiCurrencyDollar className="h-16 w-16" />}
        title="کیف پول"
        value={toPersianNumbersWithComma(balance)}
        color="primary"
      />
    </div>
  );
}
export default Stats;
