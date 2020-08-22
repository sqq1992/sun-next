import { withRouter } from "next/router";
import {Button, Typography} from 'antd';

const { Title } = Typography;

const TestRouter = ({router, age}) => {
    return (
        <div>
            <Title>测试路由2345</Title>
            <div>{router.query.name}</div>
            <div>{age}</div>
        </div>
    )
};

//todo getInitialProps
TestRouter.getInitialProps = () => {
    return{
        age: 24
    }
};

export default withRouter(TestRouter);
