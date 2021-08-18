import { Container, _Span, Container3, Cards } from "./styles";
import { useState, useRef } from "react";
import { Header1, Small, Span, Header3 } from "../../../components/Font/styles";
import { theme } from "../../../config/theme";
import { Spacer } from "../../../components/Spacer/styles";
import { Flex, Grid } from "../../../components/Box/styles";
import { generateID } from "../../../lib/generateID";
import Button from "../../../components/Button";
import { useRouter } from "next/router";
import Modal from "../../../components/Modal";
import Fields from "../Fields";
import CashWithdrawal from "../CashWithdrawal";

const Cash = ({ items }) => {
  const [callModal, setCallModal] = useState(false);
  const [type, setType] = useState("airtime");
  const showModal = (type) => {
    setCallModal(true);
    setType(type);
  };
  const hideModal = () => setCallModal(false);

  const ModalType = {
    airtime: { component: <Fields />, title: "Select Network" },
    cashWithdrawal: { component: <CashWithdrawal />, title: "Select Account" },
  };

  const transactions = [
    {
      name: "Airtime",
      date: "date",
      amount: "+200",
      click: () => showModal("airtime"),
    },
    {
      name: "Cash Withdrawal",
      date: "date",
      amount: "+200",
      click: () => showModal("cashWithdrawal"),
    },
  ];

  return (
    <Container>
      <Spacer height="20px"></Spacer>
      <Grid gap="20px">
        {transactions.map((transaction) => (
          <Cards
            justifyContent="space-between"
            key={generateID(15)}
            onClick={() => transaction.click()}
          >
            <Flex direction="column" width="auto" alignItems="flex-start">
              <Span
                color={["primary", "main", theme]}
                size="font16"
                lineHeight="lineHeight19"
                weight="fontWeightNormal"
                fontFamily="sagoeBold"
              >
                {transaction.name}
              </Span>
              <Small
                color={["primary", "main", theme]}
                size="font14"
                lineHeight="lineHeight16"
                weight="fontWeightNormal"
                fontFamily="sagoe"
              >
                {transaction.date}
              </Small>
            </Flex>

            <Flex width="auto">
              <Span
                color={["primary", "main", theme]}
                size="font16"
                lineHeight="lineHeight19"
                weight="fontWeightNormal"
                fontFamily="sagoeBold"
              >
                {transaction.amount}
              </Span>
            </Flex>
          </Cards>
        ))}
      </Grid>

      <Modal
        show={callModal}
        handleClose={hideModal}
        title={ModalType[type].title}
      >
        {ModalType[type].component}
      </Modal>
    </Container>
  );
};
export default Cash;
