import Layout from "@/components/Layout";

export default function TermsAndConditionsPage({ data }: any) {
  return (
    <Layout>
      <div className="display-6 mt-5 mb-4 text-center fw-bold">Terms and Conditions</div>
      <div className="container">
        <ul>
          {data.map((item: any) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const resp = await fetch(
    `${process.env.STRAPI_API_URI}/api/website?populate[termsAndConditions]=*`,
    { headers: { Authorization: `Bearer ${process.env.STRAPI_API_KEY}` } }
  );
  const respData = await resp.json();
  let data = respData.data.attributes.termsAndConditions.map((item: any) => item.item);
  return {
    props: {
      data: data,
    },
  };
}
