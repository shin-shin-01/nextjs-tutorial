import Head from 'next/head'
import Layout from '../../components/layout'
import Alert from '../../components/alert'

export default function AlertPage() {
  return (
    <Layout>
      <Head>
        <title>Alert Test</title>
      </Head>
      <div>
        <Alert type='success'>
          <p>AlertTest: SUCCESS</p>
        </Alert>
        <Alert type='warning'>
          <p>AlertTest: WARNING</p>
        </Alert>
        <Alert type='error'>
          <p>AlertTest: ERROR</p>
        </Alert>
      </div>
    </Layout>
  );
}
