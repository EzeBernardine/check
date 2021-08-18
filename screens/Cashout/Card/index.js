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

const Cash = ({ items }) => {
  const [callModal, setCallModal] = useState(false);
  const showModal = () => setCallModal(true);
  const hideModal = () => setCallModal(false);

  const transactions = [
    {
      name: "Airtime",
      date: "date",
      amount: "+200",
      click: showModal,
    },
    {
      name: "Cash Withdrawal",
      date: "date",
      amount: "+200",
      click: () => [],
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

      <Modal show={callModal} handleClose={hideModal} title={"Select Network"}>
        <Fields />
      </Modal>
    </Container>
  );
};
export default Cash;
