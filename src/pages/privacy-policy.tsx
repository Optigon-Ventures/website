import Layout from "@/components/Layout";

export default function PrivacyPolicyPage({ data } : any) {
  console.log(data)
  return (
    <Layout>
      <div className="display-2 text-center fw-bold">Privacy Policy</div>
      {data}
    </Layout>
  );
}

export async function getServerSideProps() {
  const resp = await fetch(
    `${process.env.STRAPI_API_URI}/api/website?fields[0]=privacyPolicy`,
    { headers: { Authorization: `Bearer ${process.env.STRAPI_API_KEY}` } }
  );
  const respData = await resp.json()
  let data = respData.data.attributes.privacyPolicy
  console.log(data)
  return { props: {
    data: data
  } }
}