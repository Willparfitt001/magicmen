import Enquire from '@/components/global/Enquire';
import Footer from '@/components/home/Footer';
import GeneralHeroSection from '@/components/home/GeneralHeroSection';
import CustomH1 from '@/components/home/heading';
import MagicMenLayout from '@/components/home/naviagation';

export default function AboutUsPage() {
  return (
    <div className="text-white font-roboto-mono space-y-6 text-center">
      <MagicMenLayout height="30vh">
        <GeneralHeroSection />
      </MagicMenLayout>
      <main className="p-2 my-11">
        <CustomH1 text={`Privacy Policy`} />
        <p>
          Magic Men Holdings trading as Magic Men Australia is committed to
          providing quality services to you and this policy outlines our ongoing
          obligations to you in respect of how we manage your Personal
          Information.
        </p>
        <div className="p-4 w-full text-center md:w-4/5 mx-auto space-y-6 ">
          <div className="space-y-6 py-4">
            <h1 className="font-bold text-xl md:text-2xl">
              What is Personal Information and why do we collect it?
            </h1>
            <p>
              Personal Information is information or an opinion that identifies
              an individual. Examples of Personal Information we collect include
              names, email addresses, phone, addresses & facsimile numbers.
            </p>
            <p>
              This Personal Information is obtained in many ways including
              interviews, correspondence, by telephone and facsimile, by email,
              via our website www.magicmen.com.au, from your website, from media
              and publications, from other publicly available sources, from
              cookies, and from third parties. We cannot guarantee website links
              or policy of authorized third parties.
            </p>
          </div>

          <div className="space-y-6 py-4">
            <h1 className="font-bold text-xl md:text-2xl">
              When do we collect it?
            </h1>
            <p>
              We may collect your Personal Information for the primary purpose
              of providing our services to you, providing information to our
              clients and marketing. We may also use your Personal Information
              for secondary purposes closely related to the primary purpose, in
              circumstances where you would reasonably expect such use or
              disclosure. You may unsubscribe from our mailing/marketing lists
              at any time by contacting us in writing.
            </p>
            <p>
              When we collect Personal Information we will, where appropriate
              and where possible, explain to you why we are collecting the
              information and how we plan to use it.
            </p>
          </div>

          <div className="space-y-6 py-4">
            <h1 className="font-bold text-xl md:text-2xl">
              What do we do with it?
            </h1>
            <p>
              {` Sensitive Information Sensitive information is defined in the
              Privacy Act to include information or opinion about such things as
              an individual's racial or ethnic origin, political opinions,
              membership of a political association, religious or philosophical
              beliefs, membership of a trade union or other professional body,
              criminal record or health information.`}
            </p>
            <p>
              Sensitive information will be used by us only: For the primary
              purpose for which it was obtained For a secondary purpose that is
              directly related to the primary purpose With your consent; or
              where required or authorised by law.
            </p>
          </div>
          <div className="space-y-6 py-4">
            <h1 className="font-bold text-xl md:text-2xl">Third Parties</h1>
            <p>
              {` Where reasonable and practicable to do so, we will collect your Personal Information only from you. However, in some circumstances, you may be provided with information by third parties. In such a case we will take reasonable steps to ensure that you are made aware of the information provided to us by the third party.`}
            </p>
            <p>
              We have adopted the Australian Privacy Principles (APPs) contained
              in the Privacy Act 1988 (Cth) (the Privacy Act). The NPPs govern
              the way in which we collect, use, disclose, store, secure &
              dispose of your Personal Information.
            </p>
            <p>
              A copy of the Australian Privacy Principles may be obtained from
              the website through The Office of the Australian Information
              Commissioner at www.aoic.gov.au
            </p>
          </div>

          <div className="space-y-6 py-4">
            <h1 className="font-bold text-xl md:text-2xl">
              Disclosure of Personal Information
            </h1>
            <p>
              {` Your Personal Information may be disclosed in a number of circumstances including the following:

Third parties whereby your consent to the use or disclosure; and

Where required or authorised by law.

Security of Personal Information`}
            </p>
            <p>
              Your Personal Information is stored in a manner that reasonably
              protects it from misuse and loss and from unauthorised access,
              modification or disclosure.
            </p>
            <p>
              When your Personal Information is no longer needed for the purpose
              for which it was obtained, we will take reasonable steps to
              destroy or permanently de-identify your Personal Information.
              However, most of the Personal Information is or will be stored in
              client files which will be kept by us for a minimum of 7 years.
              Access to your Personal Information
            </p>
            <p>
              You may access the Personal Information we hold about you and to
              update and/or correct it, subject to certain exceptions. If you
              wish to access your Personal Information, please contact us in
              writing. Magic Men Holdings Pty Ltd trading as Magic Men will not
              charge any fee for your access request but may charge an
              administrative fee for providing a copy of your Personal
              Information. In order to protect your Personal Information, we may
              require identification from you before releasing the requested
              information.
            </p>
          </div>

          <div className="space-y-6 py-4">
            <h1 className="font-bold text-xl md:text-2xl">
              Maintaining the Quality of your Personal Information
            </h1>
            <p>
              {` It is important to us that your Personal Information is up kept up to date. We take reasonable steps to make sure that your Personal Information is accurate, complete and up-to-date. If you find that the information we have is not up to date or is inaccurate, please advise us as soon as practicable so we can update our records and ensure we can continue to provide quality services to you.`}
            </p>
            <p>
              We do not intend to sell to the EU or UK. Services provided by us
              are only provided in Australia.
            </p>
            <h3 className="font-bold">Policy Updates</h3>
            <p>
              This Policy may change from time to time and is available on our
              website.
            </p>
            <h3 className="font-bold">
              {' '}
              Privacy Policy Complaints and Enquiries
            </h3>
            <p>
              If you have any queries or complaints about our Privacy Policy
              please contact us at:
            </p>
            <h3 className="font-bold">Contact us: </h3>
            <p>
              info@magicmen.com.au <br></br>
              1300 624 426
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
