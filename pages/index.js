import {Button} from 'antd';
import Link from 'next/link';
import Router from 'next/router';

export default () => <div>

    <div>题包</div>
    <Link href="/test?name=sun1992">
        <Button>跳转</Button>
    </Link>
    <div>
        <Button type="danger" onClick={()=>{
            Router.push({
                pathname:'/test',
                query:{
                    name:"sun1992"
                }
            })
        }}>点击跳转</Button>
    </div>
</div>;