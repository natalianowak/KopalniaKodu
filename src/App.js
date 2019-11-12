import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {
  Layout, Menu, Icon, List, Avatar, Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Row,
  Col,
  Button,
} from 'antd';

{/* <link rel="Shortcut icon" href="sygnet.png"> */ }

const { Content, Footer } = Layout;
const { TextArea } = Input;
const data = [
  {
    title: 'JAVA SCRIPT',
  },
  {
    title: 'HTML',
  },
  {
    title: 'CSS',
  },
  {
    title: 'SQL',
  },
  {
    title: 'BOOTSTRAP',
  },
  {
    title: 'JQUERY',
  },
  {
    title: 'REACT JS',
  },
  {
    title: 'REACTSTRAP',
  },
  {
    title: 'ANT DESIGN',
  },
  {
    title: 'GIT',
  },
  {
    title: 'PHOTOSHOP',
  },
];
const formItemLayout = {
  labelCol: {

    sm: { span: 8 },
  },
  wrapperCol: {

    sm: { span: 8 },
  },
};
const handleSubmit = e => {
  // e.preventDefault();
  console.log('Wiadomość została wysłana ');
};


function App() {

  return (
    <Layout className="layout" >
      <Menu
        background="#fff"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '74px', textAlign: 'center', border: 'none', fontSize:'16px', fontWeight:'bold' }}
      >
        <Menu.Item key="1">Technologie</Menu.Item>
        <Menu.Item key="3">Portfolio</Menu.Item>
        <Menu.Item key="4">Kontakt</Menu.Item>
        <Menu.Item key="5">
          <img style={{ width: '100px', height: '100px' }} src="kopalniaKoduLogo.jpg" /></Menu.Item>
        <Menu.Item key="6"><a href="mailto: kopalniakodu@gmail.com">kopalniakodu@gmail.com</a></Menu.Item>
        <Menu.Item key="7"><a href="https://github.com/natalianowak" target="blank" ><Icon type="github" style={{ fontSize: '20px' }} /></a></Menu.Item>
        <Menu.Item key="8"><a href="https://www.linkedin.com/in/natalia-nowak-06552336/" target="blank"><Icon type="linkedin" style={{ fontSize: '20px' }} /></a></Menu.Item>
      </Menu>


      <Content>
        <div style={{ padding: '20px', background: '#fff' }}></div>
        <div style={{ padding: '100px 180px', background: '#efefef', minHeight: 200, }}>

          <h1 style={{ color: '#000', textAlign: 'center' }}> Tworzenie stron www niezależnie od Twojej lokalizacji</h1>
          <p style={{ color: '#000', textAlign: 'center' }}>Stworzenie strony www obejmuje system CMS, który pozwoli na samodzielną aktualizację strony www. Podstawowa oferta to 5 podstron np. Start, O firmie, Oferta, Kontakt z formularzem oraz Galeria. Cennik stron internetowych obejmuje projektowanie, uruchomienie, instalacja na serwerze, optymalizacja pod kątem wyszukiwania w Google, można także dodać statystyki. Możliwe wykonanie w kilku wersjach językowych na bazie materiałów klienta.</p>
          <h1 style={{ paddingTop: '30px', color: '#000', textAlign: 'center' }}> Aktualizacja stron www</h1>
          <p style={{ color: '#000', textAlign: 'center' }}>Wychodząc na przeciw zapotrzebowaniu oferujemy aktualizację stron www. Opłata jest pobierana tylko za przepracowany czas. Nie pobieramy stałych opłat, czy abonamentów za aktualizację strony internetowej, klient płaci jedynie za pracę.</p>

          <h1 style={{ paddingTop: '30px', color: '#000', textAlign: 'center' }}>Tworzenie aplikacji internetowych </h1>
          <p style={{ color: '#000', textAlign: 'center' }}>Tworzenie aplikacji mobilnych składa się z kilku procesów. Tworząc aplikację mobilną dbamy o to aby aplikacja była mocno funkcjonalna a zarazem prosta i intuicyjna w obsłudze. Dbamy aby interfejs aplikacji był wygodny i czytelny a zarazem prosty i nie przeładowany ilością elementów. po stworzeniu aplikacji oferujemy wsparcie techniczne dla naszych klientów.</p>
        </div>

        <div style={{ padding: '100px 180px', background: '#fff', minHeight: 200, color: '#fff' }} >
          <h1 style={{ textAlign: "center" }}>Technologie</h1>
          <h3 style={{ textAlign: "center", paddingBottom: '20px' }}>Technologie których używam</h3>
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 6,
              xxl: 3,
            }}
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <Avatar style={{ marginRight: '20px' }}><Icon style={{ fontSize: '17px' }} type="code" /></Avatar>
                {item.title}
              </List.Item>
            )}
          />
        </div>

        <div style={{ padding: '100px', background: '#efefef', minHeight: 200, color: '#000' }}>
          <h1 style={{ color: '#000', textAlign: "center" }}>Portfolio</h1>
          <h3 style={{ color: '#000', textAlign: "center", paddingBottom: '20px' }}>Zrealizowane projekty</h3>
          <Row gutter={[16, 16]}>
            <Col style={{ textAlign: "center" }} span={8}>
              <p>Wytwórnia pikseli</p>
              <img style={{ width: "187px", height: "93px" }} src="wytwornia.png" />
              <div><Button icon="search" className="buttonSpace"><a style={{ paddingLeft: '5px' }} href="https://github.com/natalianowak/wytworniaPikseli">code</a></Button>
                <Button icon="search" className="buttonSpace"><a style={{ paddingLeft: '5px' }} href="http://wytworniapikseli.pl/">demo</a></Button></div>

            </Col>
            <Col style={{ textAlign: "center"  }} span={8}>
              <p>Skanery dla pokepro.pl</p>
              <img style={{ width: "187px", height: "93px" }} src="staypro.png" />
              <div><Button icon="search" className="buttonSpace"><a style={{ paddingLeft: '5px' }} href="https://github.com/natalianowak/konfiguratorSkanerow">code</a></Button>
                <Button icon="search" className="buttonSpace"><a style={{ paddingLeft: '5px' }} href="https://natalianowak.github.io/konfiguratorSkanerow/">demo</a></Button></div>
            </Col>
            <Col style={{ textAlign: "center"   }} span={8} >
              <p>React comment app</p>
              <img style={{ width: "187px", height: "93px" }} src="commentApp.png" />
              <div><Button icon="search" className="buttonSpace"><a style={{ paddingLeft: '5px' }} href="https://github.com/natalianowak/CommentPostApp"> code</a></Button>
                <Button icon="search" className="buttonSpace"><a style={{ paddingLeft: '5px' }} href="https://natalianowak.github.io/CommentPostApp/"> demo</a></Button></div>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col style={{ textAlign: "center"  }} span={8} >
              <p>React form</p>
              <img style={{ width: "187px", height: "93px" }} src="form.png" />
              <div><Button icon="search" className="buttonSpace"><a style={{ paddingLeft: '5px' }} href="https://github.com/natalianowak/react-form"> code</a></Button>
                <Button icon="search" className="buttonSpace"><a style={{ paddingLeft: '5px' }} href="https://natalianowak.github.io/react-form/"> demo</a></Button></div>
            </Col>
            <Col style={{ textAlign: "center"  }} span={8} >
              <p>React cross game</p>
              <img style={{ width: "187px", height: "93px" }} src="crossgame.png" />
              <div><Button icon="search" className="buttonSpace"><a style={{ paddingLeft: '5px' }} href="https://github.com/natalianowak/reactCrossGame"> code</a></Button>
                <Button icon="search" className="buttonSpace"><a style={{ paddingLeft: '5px' }} href="https://natalianowak.github.io/reactCrossGame/"> demo</a></Button></div>
            </Col>
            <Col style={{ textAlign: "center"  }} span={8} >
              <p>React colors</p>
              <img style={{ width: "187px", height: "93px" }} src="colors.png" />
              <div><Button icon="search" className="buttonSpace"><a style={{ paddingLeft: '5px' }} href="https://github.com/natalianowak/react-colors"> code</a></Button>
                <Button icon="search" className="buttonSpace"><a style={{ paddingLeft: '5px' }} href="https://natalianowak.github.io/react-colors/"> demo</a></Button></div>
            </Col>
          </Row>
        </div>

        <div style={{ padding: '100px 180px', background: '#fff', minHeight: 200 }} >
          <h1 style={{ textAlign: "center" }}>Kontakt</h1>
          <Form action="https://formspree.io/mqkkbeaa" method="POST" {...formItemLayout} onSubmit={handleSubmit}>
            <Form.Item label="Imię i nazwisko">
              <Input type="text" name="name" />
            </Form.Item>
            <Form.Item label="E-mail">
              <Input type="email" name="_replyto" />
            </Form.Item>
            <Form.Item label="Wiadomość">
              <TextArea rows={4} />
            </Form.Item>
            <Button type="submit" value="Send" style={{ marginLeft: '47%' }} type="primary" htmlType="submit" className="login-form-button">
              Wyślij
          </Button>
          </Form>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center', backgroundColor:'#efefef' }}>Created by Natalia Nowak 2018</Footer>
    </Layout>
  );
}

export default App;
