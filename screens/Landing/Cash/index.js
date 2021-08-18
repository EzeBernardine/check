import { Container, _Span, Container3, Container4 } from "./styles";
import { useState } from "react";
import { Header1, Small, Span, Header3 } from "../../../components/Font/styles";
import { theme } from "../../../config/theme";
import { Spacer } from "../../../components/Spacer/styles";
import { Flex, Grid } from "../../../components/Box/styles";
import { generateID } from "../../../lib/generateID";
import Button from "../../../components/Button";
import { useRouter } from "next/router";

const Cash = () => {
  const router = useRouter();
  const transactions = [
    {
      name: "lorem i[sum",
      date: "oops",
      amount: "+200",
    },
    {
      name: "lorem i[sum",
      date: "oops",
      amount: "+200",
    },
    {
      name: "lorem i[sum",
      date: "oops",
      amount: "+200",
    },
    {
      name: "lorem i[sum",
      date: "oops",
      amount: "+200",
    },
    {
      name: "lorem i[sum",
      date: "oops",
      amount: "+200",
    },
  ];
  return (
    <Container>
      <Header1
        color={["grey", "0", theme]}
        size="font20"
        lineHeight="lineHeight56"
        weight="fontWeightNormal"
        fontFamily="sagoeBold"
      >
        Cash Winnings
      </Header1>

      <Spacer height="30px"></Spacer>

      <Container3 direction="column">
        <Small
          color={["grey", "100", theme]}
          size="font14"
          lineHeight="lineHeight16"
          weight="fontWeightNormal"
          fontFamily="sagoe"
        >
          Total Cash
        </Small>
        <Span
          color={["grey", "0", theme]}
          size="font24"
          lineHeight="lineHeight28"
          weight="fontWeightNormal"
          fontFamily="sagoeBold"
        >
          300,000
        </Span>
        <Spacer height="10px"></Spacer>
        <Button
          text={"Cashout"}
          size="sm"
          bgColor={["primary", "main"]}
          border={["transparent", "primary"]}
          color={["primary", "white"]}
          type="button"
          onClick={() => router.push("/cashout")}
        />
      </Container3>

      <Spacer height="30px"></Spacer>

      <div>
        <Header3
          color={["grey", "0", theme]}
          size="font18"
          lineHeight="lineHeight56"
          weight="fontWeightNormal"
          fontFamily="sagoeBold"
        >
          Transaction History
        </Header3>

        <Spacer height="20px"></Spacer>
        <Grid gap="20px">
          {transactions.map((transaction) => (
            <Container4 justifyContent="space-between" key={generateID(15)}>
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
            </Container4>
          ))}
        </Grid>
      </div>
    </Container>
  );
};
export default Cash;
