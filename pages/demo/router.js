import { withRouter } from "next/router";
import {Button, Typography} from 'antd';

const { Title } = Typography;

export default withRouter(({router}) => {

    return(
        <div>
            <Title>测试路由</Title>
            <div>{router.query.name}</div>
        </div>
    )
});