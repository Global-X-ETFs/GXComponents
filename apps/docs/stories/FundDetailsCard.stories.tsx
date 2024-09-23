import type { Meta, StoryObj } from "@storybook/react";
import {
  FundDetailsCard,
  FundDetailsCardContent,
  FundDetailsCardHeader,
  FundDetailsCardTitle,
  FundDetailsCardSubtitle,
  FundDetailsCardFooter,
  Table,
  TableBody,
  TableCell,
  TableRow,
  InformationCardToolTip,
} from "@global-x-etfs/gx-components";

const meta: Meta = {
  title: "Components/FundDetailsCard",
  component: FundDetailsCard,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export default meta;

export const ExampleFundDetailsCard: Story = {
  render() {
    const title = "ETF Characteristics";
    const subtitle = "As of Sep 20 2024";
    const years = [
      { year: 2019, value: { price_to_earnings: 34.55, price_to_book_value: 7.33 } },
      { year: 2020, value: { price_to_earnings: 30.22, price_to_book_value: 6.17 } },
    ];

    return (
      <FundDetailsCard>
        <FundDetailsCardHeader>
          <FundDetailsCardTitle>{title}</FundDetailsCardTitle>
          <FundDetailsCardSubtitle>{subtitle}</FundDetailsCardSubtitle>
        </FundDetailsCardHeader>
        <FundDetailsCardContent>
          <Table>
            <TableBody className="text-[15px] font-proximatight border-b">
              <TableRow>
                <TableCell variant="row-head">
                  Return on Equity
                  <InformationCardToolTip>
                    Return on equity is a measure of how well a company used
                    reinvested earnings to generate additional earnings. It is
                    calculated as net income divided by average common equity
                    over the period. Net income is calculated on a “pro forma”
                    basis using consensus EPS results & estimates for the
                    individual constituents of each index, multiplied by the
                    float-adjusted shares in the index.
                  </InformationCardToolTip>
                </TableCell>
                <TableCell>12.38%</TableCell>
                <TableCell />
              </TableRow>
              <TableRow>
                <TableCell variant="row-head">
                  Weighted Avg. Market Cap
                  <InformationCardToolTip>
                    The weighted average market capitalization of the companies
                    held by the Fund.
                  </InformationCardToolTip>
                </TableCell>
                <TableCell>1,051,460 M</TableCell>
                <TableCell />
              </TableRow>
              <TableRow>
                <TableCell />
                {years.map((year) => (
                  <TableCell key={year.year} variant="row-head">
                    {year.year}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell variant="row-head">
                  Price-to-earnings
                  <InformationCardToolTip>
                  The price-to-earnings ratio is a fundamental measure used to determine if an investment is valued appropriately. Each holding’s P/E is the latest closing price divided by its net income. Net income is calculated on a “pro forma” basis using consensus EPS results/estimates for the individual constituents of each index, multiplied by the float-adjusted shares in the index.
                  </InformationCardToolTip>
                </TableCell>
                {years.map((year) => (
                  <TableCell key={year.year}>
                    {year.value.price_to_earnings}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell variant="row-head">
                  Price-to-book value
                  <InformationCardToolTip>
                  The price to book value ratio is a fundamental measure used to determine if an investment is valued appropriately. The book value of a company is a measure of how much the company’s assets are worth assuming the company’s debts are paid off. Book value is defined as common equity as reported by the index constituents according to GAAP. Forecasts reflect pro-forma calculations using most recently reported figures, plus earnings less dividends.
                  </InformationCardToolTip>
                </TableCell>
                {years.map((year) => (
                  <TableCell key={year.year}>
                    {year.value.price_to_book_value}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </FundDetailsCardContent>
        <FundDetailsCardFooter></FundDetailsCardFooter>
      </FundDetailsCard>
    );
  },
};
