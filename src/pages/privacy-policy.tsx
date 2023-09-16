import Layout from "@/components/Layout";

export default function PrivacyPolicyPage({ data } : any) {
  return (
    <Layout>
      <div className="display-6 mt-5 mb-4 text-center fw-bold">Privacy Policy</div>
      <div className="container">
        <ul>
          {data.map((item: any) => <li>{item}</li>)}
        </ul>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const resp = await fetch(
    `${process.env.STRAPI_API_URI}/api/website?populate[privacyPolicy]=*`,
    { headers: { Authorization: `Bearer ${process.env.STRAPI_API_KEY}` } }
  );
  const respData = await resp.json();
  let data = respData.data.attributes.privacyPolicy.map((item: any) => item.item);

  console.log(data)
  return {
    props: {
      data: data,
    },
  };
}
