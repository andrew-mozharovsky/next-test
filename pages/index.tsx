import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { IMain, IMainFields, } from '../contentful'
import client from '../contentful/index'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Home = ({ home }: { home: IMain }) => {  
console.log("🚀 ~ file: index.tsx ~ line 8 ~ Home ~ home", home)
  
  return (
    <div>
      <Head>
        <title>{home.fields.title}</title>        
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>        
        <div style={{
            background: `url("http:${home.fields.background?.fields.file.url}") no-repeat`,
            minHeight: 300
          }}>
          <h1>{home.fields.title}</h1>
          {documentToReactComponents(home.fields.description!)}
        </div>        
      </main>      
    </div>
  )
}

export default  Home

export const getStaticProps: GetStaticProps = async () => {
  const home = await client.getEntries<IMainFields>({
    content_type: 'main',
    limit: 1
  })

  const [homePage] = home.items

  return {
    props: {
      title: 'my test',
      home: homePage
    }
  }
}