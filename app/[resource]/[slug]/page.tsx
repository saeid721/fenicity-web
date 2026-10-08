import type { Metadata } from 'next';
import { DetailPage } from '../../../components/detail-page';
import { getItem } from '../../../lib/api';
export async function generateMetadata({params}:{params:Promise<{resource:string;slug:string}>}):Promise<Metadata>{const {resource,slug}=await params;try{const x:any=(await getItem(resource,slug)).data;return{title:x.title,description:x.excerpt}}catch{return{title:'Feni City'}}}
export default async function Page({params}:{params:Promise<{resource:string;slug:string}>}){const {resource,slug}=await params;return <DetailPage resource={resource} slug={slug}/>}
