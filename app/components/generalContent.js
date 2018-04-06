import React, { Component } from "react";
import { Container, Content, Drawer } from "native-base";
import style from "./../styles/generalContent";
import SideBar from "../components/sidebar";
import Header from "./header";

class GeneralContent extends Component {
    constructor(props) {
        super(props);

        this.closeDrawer = this.closeDrawer.bind(this);
        this.openDrawer = this.openDrawer.bind(this);
    }

    closeDrawer() {
        this.drawer._root.close();
    }

    openDrawer() {
        this.drawer._root.open();
    }

    render() {
        return (
            <Drawer
                ref={ref => {
                    this.drawer = ref;
                }}
                content={<SideBar navigator={this.navigator} />}
                onClose={() => this.closeDrawer()}
            >
                <Container>
                    <Header openDrawer={this.openDrawer} />
                    <Content style={style.content}>
                        {this.props.content}
                    </Content>
                </Container>
            </Drawer>
        );
    }
}

export default GeneralContent;
