import FAQ from '@/components/global/faq_image';
import CustomH1 from '@/components/home/heading';
import MagicMenLayout from '@/components/home/naviagation';
import Footer from '@/components/home/Footer';
import GeneralHeroSection from '@/components/home/GeneralHeroSection';

export default function Page() {
  return (
    <div className="text-white">
      <MagicMenLayout height="h-50vh">
        <GeneralHeroSection />
      </MagicMenLayout>
      <main className="font-roboto-mono text-sm  p-4 w-full md:w-4/5 text-center mx-auto">
        <CustomH1 text={`Terms & Conditions`} />
        {/* paragraph */}
        <div className="space-y-6">
          <h2 className="uppercase font-bold text-xl">
            TERMS AND CONDITIONS FUNCTIONS,{' '}
            <b className="text-yellow-400">TICKETS AND DRINK PACKAGES</b>
          </h2>
          <p>
            This Section refers to the terms and conditions whereby a patron has
            made a deposit to come to our show, reserved group package/function
            at our venue or have tickets to attend the Magic Men show. It is not
            applicable to home visit services (see below).
          </p>
          <p>
            Magic Men wishes to advise you of the following Terms & Conditions
            concerning our cabaret show, tickets & functions held at our venues.
            Guests must be over the age of 18 years old and must be able to
            provide government I.D to guarantee entry.
          </p>
          <p>
            We practice responsible serving of alcohol and reserve the right to
            monitor and control the serving of alcohol in compliance with the
            law.
          </p>
          <p>
            All promotions, packages, tickets and venues are subject to
            availability and at the discretion of Magic Men. A 2% surcharge
            applies for all Visa and Mastercard credit card payments.
          </p>
        </div>
        <div className="my-11 space-y-4">
          <h2 className="uppercase font-bold text-xl">
            REFUND POLICY
            <b className="text-yellow-400 ml-2">
              for tickets booked to the stage show
            </b>
          </h2>
          <p>
            Where the purchaser has bought tickets to attend our stage show or
            touring show through us direct or through a 3rd party platform (such
            as Eventbrite, Trip Advisor, FeverUp, Megatix, or Ticketek).
          </p>
          <p>
            Purchased tickets for the stage show are non-refundable, non
            -redeemable and non-transferable to another person. Please select
            the date carefully and contact us if you have any enquiries - we
            allow a one-time free change of date only (subject to approval and
            applicable to the same event series only). If an event is
            rescheduled/cancelled, you will be offered equivalent seats at the
            rescheduled event or you reserve the right to choose to take a
            refund or credit note valid for up to 2 years.{' '}
          </p>
        </div>
        <div>
          <h2 className="uppercase font-bold text-xl">
            REFUND POLICY
            <b className="text-yellow-400 ml-2">
              FOR HOME VISIT PERFORMERS AND WAITERS
            </b>
          </h2>
          <p>
            If you have paid your deposit on a performer, entertainer or waiter,
            and it is confirmed by our staff member. If you decide to cancel
            your booking for any reason such as “change of mind” or “event is
            not going ahead” after paying your deposit, you will forfeit your
            deposit. We allow one free change to your booking date/package, this
            is to help you keep the initial deposit you have made and use it for
            another occasion and time in the future. Any subsequent changes
            after this will incur a further deposit equivalent to the one
            initially made to keep the booking still.
          </p>
          <p>
            Please note, we understand that unforeseeable events (specifically
            deaths, wedding cancelled, sickness and unforeseen accidents) do
            occur, with that in mind we do allow one change to the booking free
            of charge.{' '}
          </p>
          <p>
            All our offerings are subject to availability. We reserve the right
            to change our rosters where we deem fit.
          </p>
        </div>

        <div className="my-6 space-y-6">
          <h2 className="uppercase font-bold text-xl">
            REFUND POLICY
            <b className="text-yellow-400 ml-2">
              for group functions & packages
            </b>
          </h2>
          <p>
            {` Where the hirer has placed a deposit to 'reserve the date' for their
            group and we have confirmed that the deposit is received and
            function is now held for the hirer.`}
          </p>
          <p>
            {`1. The hirer may cancel their booking within 7 days of DEPOSIT
            PAYMENT, and receive their deposit back in full less the
            administration fee (20% of the deposit). This is subject to Magic
            Men management's discretion. This does not include bookings made on
            the week of the actual event.`}
          </p>
          <p>
            2. If the hirer cancels their booking after 7 days of booking (or
            books within the week of the event), their deposit will not be
            refunded.
          </p>
          <p>
            3. If the hirer cancels their booking within the week of the actual
            event, Magic Men reserves the right to forfeit your deposit and may
            seek further costs to cover expenses outlaid. No credit note will be
            considered.{' '}
          </p>
          <p>
            Before contacting us to cancel your package because your event is
            not going ahead or the party is cancelled, please consider a change
            of date as a way to keep your deposit and use it for a girls night
            out on another date. We allow one free change to your booking
            date/package (excluding modifications done for bookings on the week
            of the event). Any subsequent changes after this will incur a
            further deposit equivalent to the one initially made to keep the
            booking still.
          </p>
        </div>

        <div className="my-6 space-y-6">
          <h2 className="uppercase font-bold text-xl">
            CREDIT NOTE POLICY
            <b className="text-yellow-400 ml-2">
              for show functions and home visits
            </b>
          </h2>
          <p>
            {` 1. All credit notes are issued via email only. Please keep a copy or screenshot of the email trail since this will be required upon rebooking.`}
          </p>
          <p>
            {` 2. All credit notes are valid for a standard 24 months from the date of issue unless stated otherwise upon issue.`}
          </p>
          <p>3. All credit notes can only be used to rebook once.</p>
          <p>
            Before contacting us to enquire, please note that all credit notes
            are determined by a certain amount. The amount issued will be the
            set amount valid for use upon rebooking. If a credit note is
            rebooked for a lower amount than the set amount, the difference
            between both will not be refunded. If a credit note is rebooked for
            a higher amount than the set amount, the difference will be
            shouldered by the client. All credit notes are non-refundable but
            are transferrable upon the approval of Magic Men; terms of use are
            final.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
