import type { Meta, StoryObj } from "@storybook/react";
import { Button, Disclaimer } from "@global-x-etfs/gx-components";

const meta = {
  title: "Components/Disclaimer",
  component: Disclaimer,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Disclaimer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BlankDisclaimer: Story = {
  args: {
    children: "Page Disclaimer ...",
    className: "p-8 w-[500px]",
  },
};

export const DisclaimerWithTextOnly: Story = {
  args: {
    children: (
      <div className="px-6 py-8 [&_p]:mb-5">
        <p>
          Investing involves risk, including the possible loss of principal. In
          addition to the normal risks associated with investing, international
          investments may involve risk of capital loss from unfavorable
          fluctuation in currency values, from differences in generally accepted
          accounting principles or from economic or political instability in
          other nations. Emerging markets involve heightened risks related to
          the same factors as well as increased volatility and lower trading
          volume. Narrowly focused investments and investments focusing on a
          single country may be subject to higher volatility.
        </p>

        <p>
          Technology-themed investments may be subject to rapid changes in
          technology, intense competition, rapid obsolescence of products and
          services, loss of intellectual property protections, evolving industry
          standards and frequent new product productions, and changes in
          business cycles and government regulation.
        </p>

        <p>
          Shares of ETFs are bought and sold at market price (not NAV) and are
          not individually redeemed from the funds. Brokerage commissions will
          reduce returns.
        </p>

        <p className="font-bold font-sans italic">
          Carefully consider the funds’ investment objectives, risk factors,
          charges, and expenses before investing. This and additional
          information can be found in the funds’ summary or full prospectus,
          which may be obtained by calling 888-493-8631 or by visiting
          globalxetfs.com. Please read the prospectus carefully before
          investing.
        </p>

        <p>
          Global X Management Company LLC serves as an advisor to the Global X
          Funds. The funds are distributed by SEI Investments Distribution Co.
          (SIDCO, 1 Freedom Valley Drive, Oaks, PA, 19456), which is not
          affiliated with Global X Management Company LLC or Mirae Asset Global
          Investments.
        </p>

        <p>
          MSCI, S&P, NASDAQ and FTSE indexes have been licensed by MSCI,
          Standard & Poor’s, NASDAQ OMX and FTSE, respectively, for use by
          Global X Management Company LLC. Global X Funds are not sponsored,
          endorsed, issued, sold, or promoted by these entities, nor do these
          entities make any representations regarding the advisability of
          investing in the Global X Funds. Neither SIDCO, Global X nor Mirae
          Asset Global Investments are affiliated with these entities.
        </p>
      </div>
    ),
  },
};

export const DisclaimerWithBackToTopButton: Story = {
  args: {
    children: (
      <div className="px-6 py-8 [&_p]:mb-5">
        <p>
          Communications issued in the European Union relating to Global X UCITS
          ETFs are issued by Global X Management Company (Europe) Limited (“GXM
          Europe”) acting in its capacity as management company of Global X ETFs
          ICAV. GXM Europe is authorised and regulated by the Central Bank of
          Ireland. GXM Europe is registered in Ireland with registration number
          711633.
        </p>

        <p>
          Communications issued in the United Kingdom and Switzerland in
          relation to Global X UCITS ETFs are issued by Global X Management
          Company (UK) Limited (“GXM UK”), which is authorised and regulated by
          the Financial Conduct Authority. The registered office of GXM UK is 77
          Coleman St, London, EC2R 5BJ, UK. Information about GXM UK can be
          found on the Financial Services Register (register number 965081).
        </p>

        <p>
          Capital at risk: The value of an investment in ETFs may go down as
          well as up and past performance is not a reliable indicator of future
          performance.
        </p>

        <p>
          Global X does not offer investment advice based upon your individual
          circumstances. Please ensure that you speak with a professional and
          independent financial adviser if you are not sure whether any of the
          information provided on this website is relevant or suitable to you.
        </p>

        <p>
          This website is designed to give you information offered by Global X.
          Investing in certain financial instruments or products may not be
          suitable for all types of investors as they carry a high degree of
          risk. You may lose all of your initial investment. Only speculate with
          money you can afford to lose. Changes in exchange rates may also cause
          your investment to go up or down in value. Tax treatment depends on
          the individual circumstances of each investor and may be subject to
          change in the future. Please ensure that you fully understand the
          risks involved. If in any doubt, please seek independent financial
          advice. Investors should refer to the section entitled “Risk Factors”
          in the relevant prospectus for further details of these and other
          risks associated with an investment in the securities offered by the
          issuer.
        </p>

        <p>
          This website is prepared for information purposes only. It does
          neither constitute an advertisement, a recommendation nor an offer or
          solicitation to purchase or sell investment products or instruments.
          It is your responsibility to be aware of and to abide by all
          applicable laws and regulations in the relevant jurisdictions.
        </p>

        <p>All rights reserved. ©2023 Global X ETFs.</p>
        <Button
          className="w-fit flex-nowrap mt-16 text-neutral-200"
          variant="dim"
          beforeContent="arrowup"
        >
          Back to Top
        </Button>
      </div>
    ),
  },
};
