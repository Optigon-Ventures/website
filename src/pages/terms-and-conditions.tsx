import Layout from "@/components/Layout";

export default function TermsAndConditionsPage({ data }: any) {
  return (
    <Layout>
      <div className="display-2 text-center fw-bold">Terms and Conditions</div>
      {data}
    </Layout>
  );
}

export async function getServerSideProps() {
  const resp = await fetch(
    `${process.env.STRAPI_API_URI}/api/website?fields[0]=termsAndConditions`,
    { headers: { Authorization: `Bearer ${process.env.STRAPI_API_KEY}` } }
  );
  const respData = await resp.json();
  let data = respData.data.attributes.termsAndConditions;
  return {
    props: {
      data: data,
    },
  };
}
