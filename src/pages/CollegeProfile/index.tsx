import React from 'react';
import { Row, Col, Typography } from 'antd';
import './CollegeProfile.css';

const { Title } = Typography;

const CollegeProfile: React.FC = () => {
  return (
    <div style={{ padding: '24px' }}>
      <Title level={2} style={{ marginBottom: 24 }}>
        学院信息中心
      </Title>

      <Row gutter={[24, 24]}>
        {/* 左侧：信息编辑区 */}
        <Col span={16}>
          {/* 基础信息 */}
          <div className="section-card">
            <h2>📌 基础信息</h2>
            <div className="field-row">
              <label>学院全称：</label>
              <span>数据科学与工程学院</span>
            </div>
            <div className="field-row">
              <label>学院简称：</label>
              <span>数据学院</span>
            </div>
            <div className="field-row">
              <label>学院Logo：</label>
              <div className="upload-mock">
                <img src="/college-logo.png" alt="学院Logo" />
                <p>建议尺寸：1290x375px</p>
              </div>
            </div>
            <div className="field-row">
              <label>宣传语：</label>
              <span>以‘系统架构师’之严谨，融‘数据科学家’之创新，锻造拔尖复合型人才。</span>
            </div>
          </div>

          {/* 院长寄语 */}
          <div className="section-card">
            <h2>👨‍🏫 院长寄语</h2>
            <div className="field-row">
              <label>院长姓名：</label>
              <span>张三</span>
            </div>
            <div className="field-row">
              <label>院长职务：</label>
              <span>院长、教授</span>
            </div>
            <div className="field-row">
              <label>院长照片：</label>
              <div className="upload-mock">
                <img
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  alt="院长照片"
                />
                <p>建议尺寸：400x500px</p>
              </div>
            </div>
            <div className="field-row">
              <label>寄语内容：</label>
              <span>
                欢迎各位有志青年报考数据科学与工程学院，在这里，你们将与最优秀的头脑一同探索数据的奥秘，用代码和算法改变世界。我们期待你的加入！
              </span>
            </div>
          </div>

          {/* 学院简介 */}
          <div className="section-card">
            <h2>📜 学院简介</h2>
            <div className="field-row">
              <label>简介：</label>
              <span>
                华东师范大学数据科学与工程学院（DaSE）成立于2013年，前身为数据科学与工程研究院。自2016年起招收数据科学与大数据技术专业本科生，学院在多年发展中已形成集人才培养、科学研究、社会服务于一体的综合性学院，致力于打造国内领先、国际一流的数据科学高地。
              </span>
            </div>
          </div>

          {/* 办学理念 */}
          <div className="section-card">
            <h2>💡 办学理念</h2>
            <div className="field-row">
              <label>理念：</label>
              <span>
                数据学院以数据为核心研究对象，聚焦其科学与工程问题，培养具备数据价值理解力、数据思维和工程实践能力的“硬核”科技人才。学院秉持“应用驱动创新、开放成就创新”的发展理念，围绕实际社会问题和技术痛点，联合企业开展深度合作，形成高质量、可转化的原创科研成果。
              </span>
            </div>
          </div>

          {/* 学科建设与专业设置 */}
          <div className="section-card">
            <h2>🏗️ 学科建设与专业设置</h2>
            <div className="field-row">
              <label>概况：</label>
              <span>
                学院拥有数据科学与工程一级学科，设置“数据科学与大数据技术”本科专业，“数据科学与工程”交叉学科硕博项目，以及电子信息专业的大数据方向硕博士项目。2019年，该本科专业入选国家一流本科专业建设点，相关课程与教材建设获国家级和省部级教学成果奖。
              </span>
            </div>
          </div>

          {/* 本科生培养概况 */}
          <div className="section-card">
            <h2>🌟 本科生培养概况</h2>
            <div className="field-row">
              <label>概况：</label>
              <span>
                面对“互联网+”与人工智能时代的挑战，数据学院以“造车人”为育人目标，探索系统与数据融合的“硬核”人才培养路径。学院打破传统课程体系，融合计算机、数学、信息系统知识，开展新工科教育改革，自主编写教材，实施CSP计划（Curriculum、Syllabus、Textbook），致力于培养具备系统架构能力与数据科学素养的复合型创新人才。
              </span>
            </div>
          </div>

          {/* 招生情况 */}
          <div className="section-card">
            <h2>📈 招生情况</h2>
            <div className="field-row">
              <label>概况：</label>
              <span>
                数据学院自2017年起以转专业和插班方式招收本科生，2019年起通过高考正式招生，逐步稳定在每年约60名学生规模（含高考生与转专业生）。学院注重学生数学与逻辑思维基础，采用双向选择机制，选拔具有潜力、愿意接受挑战的“硬专业”学习者。
              </span>
            </div>
          </div>

          {/* 培养方案与课程特色 */}
          <div className="section-card">
            <h2>📚 培养方案与课程特色</h2>
            <div className="field-row">
              <label>特色：</label>
              <span>
                本科课程体系融合计算机科学、应用数学与统计、信息系统等领域知识，强化实践导向。教学摒弃传统定义-定理-证明（DTP）模式，强调算法训练与数理基础的结合，推进课程模块化与现代化。课程设计注重数据的全生命周期管理，强调云平台使用、开源生态参与和工程实践能力的提升，形成“学以致用”的人才培养闭环。
              </span>
            </div>
          </div>

          {/* 教学方法与实践导向 */}
          <div className="section-card">
            <h2>🛠️ 教学方法与实践导向</h2>
            <div className="field-row">
              <label>方法：</label>
              <span>
                学院强调课堂教学与项目实践、课外科研、社会调研的深度融合，鼓励学生参与校企联合实验室项目与行业实训。通过8项企业冠名奖学金激励学生探索实际问题，推动理论联系实际，真正实现“应用驱动创新”的教学理念。
              </span>
            </div>
          </div>

          {/* 创新创业与科研指导 */}
          <div className="section-card">
            <h2>🚀 创新创业与科研指导</h2>
            <div className="field-row">
              <label>指导：</label>
              <span>
                本科生均配备班导师与双创导师，鼓励学生从低年级起进入教师科研团队，参与项目研发、竞赛和发表工作。学院设立学生实践基地，并与多家知名企业合作，营造浓厚的创新创业氛围，推动学生在真实场景中提升科研与工程能力。
              </span>
            </div>
          </div>

          {/* 全面发展与校园文化 */}
          <div className="section-card">
            <h2>🏀 全面发展与校园文化</h2>
            <div className="field-row">
              <label>文化：</label>
              <span>
                学院坚持“五育并举”，在强调学术能力的同时注重德智体美劳的协调发展。田径队屡获校运会男女团体总分第一，多个球类社团活跃校园，营造出积极向上、自信协作的学院文化氛围，全面塑造学生综合素质。
              </span>
            </div>
          </div>

          {/* 毕业去向与升学率 */}
          <div className="section-card">
            <h2>🎓 毕业去向与升学率</h2>
            <div className="field-row">
              <label>去向：</label>
              <span>
                数据学院本科毕业生深造比例长期保持在80%以上，2022届毕业生读研及出国深造率达86.5%，连续两年位列全校第一。毕业生就业率100%，多数进入阿里、腾讯、字节、华为等国内外知名企业的数据相关岗位，展现出卓越的职业竞争力和社会影响力。
              </span>
            </div>
          </div>

          {/* 人才培养特色 */}
          <div className="section-card">
            <h2>🎓 人才培养特色</h2>
            <div className="field-row">
              <label>特色：</label>
              <span>
                学院构建起贯通“学士—硕士—博士—博士后”的人才培养体系，开发首套数据专业核心课程与教材，探索数据驱动的工程教育新模式。学院每年服务全校超4000名学生计算机基础教学，并通过“水杉在线”平台实现教学数字化转型，覆盖全国数十万学生。
              </span>
            </div>
          </div>

          {/* 科研平台与成果 */}
          <div className="section-card">
            <h2>🔬 科研平台与成果</h2>
            <div className="field-row">
              <label>成果：</label>
              <span>
                学院建有上海市大数据管理系统工程研究中心、教育部区块链数据管理研究中心等五个省部级科研平台，牵头国家重点研发计划、自然科学基金等40余项重大项目，曾获国家科技进步二等奖、省部级科研一等奖等多项荣誉，研究成果广泛应用于金融、电信、物流等行业，创造显著经济社会价值。
              </span>
            </div>
          </div>

          {/* 师资力量 */}
          <div className="section-card">
            <h2>👥 师资力量</h2>
            <div className="field-row">
              <label>力量：</label>
              <span>
                学院现有教职工73人，其中包括4位国家级领军人才、2位国家级青年人才、3位上海市学术带头人，以及12位省部级优秀青年人才。数据学科建设部汇聚30余名教师，其中正高级职称占比近70%，拥有一支学术与工程能力兼具的高水平教师队伍。
              </span>
            </div>
          </div>

          {/* 产教融合与社会服务 */}
          <div className="section-card">
            <h2>🤝 产教融合与社会服务</h2>
            <div className="field-row">
              <label>概况：</label>
              <span>
                学院深化产教融合，与阿里、腾讯、华为、美团、交通银行等知名企业共建11个联合实验室，协同开展技术攻关与人才共育。同时设立10项企业冠名奖学金，依托国家级数字素养培训基地等平台，在教育、工业、社会服务领域发挥重要影响力。
              </span>
            </div>
          </div>

          {/* 教学与教育数字化改革 */}
          <div className="section-card">
            <h2>💻 教学与教育数字化改革</h2>
            <div className="field-row">
              <label>概况：</label>
              <span>
                学院下设的计算机科学教育教学部是全校计算机基础教学与实践基地，承担通识课程改革、数字素养提升与“卓越育人”工程，累计出版百余本教材，打造了“水杉在线”等标杆平台，推动华东师大教育数字化转型发展。
              </span>
            </div>
          </div>

          {/* 工程转化与系统平台研发 */}
          <div className="section-card">
            <h2>🚀 工程转化与系统平台研发</h2>
            <div className="field-row">
              <label>概况：</label>
              <span>
                工程研发部负责推动科研成果工程化落地，承担“水杉在线”“研究生系统”等平台的研发与维护，支持学院在云原生、软件测试、工程教育等方面的整体战略，实现从研究到产品的高效转换与实践教学结合。
              </span>
            </div>
          </div>
        </Col>

        {/* 右侧：实时预览区 */}
        <Col span={8}>
          <div className="preview-card-container">
            <div className="preview-card">
              <img src="/college-logo.png" alt="预览Logo" />
              <h3>数据科学与工程学院</h3>
              <p className="tagline">
                以‘系统架构师’之严谨，融‘数据科学家’之创新，锻造拔尖复合型人才。
              </p>
              <div
                style={{
                  borderTop: '1px solid #eee',
                  paddingTop: '16px',
                  marginTop: '16px',
                  textAlign: 'left',
                }}
              >
                <h4 style={{ fontSize: '14px', marginBottom: '8px' }}>📜 学院简介</h4>
                <p style={{ fontSize: '12px', color: '#666', margin: 0, textAlign: 'justify' }}>
                  学院成立于2013年，致力于打造国内领先、国际一流的数据科学高地...
                </p>
              </div>
              <div
                style={{
                  borderTop: '1px solid #eee',
                  paddingTop: '16px',
                  marginTop: '16px',
                  textAlign: 'left',
                }}
              >
                <h4 style={{ fontSize: '14px', marginBottom: '8px' }}>🌟 本科生培养</h4>
                <p style={{ fontSize: '12px', color: '#666', margin: 0, textAlign: 'justify' }}>
                  以“造车人”为育人目标，探索系统与数据融合的“硬核”人才培养路径...
                </p>
              </div>
              <div
                style={{
                  borderTop: '1px solid #eee',
                  paddingTop: '16px',
                  marginTop: '16px',
                  textAlign: 'left',
                }}
              >
                <h4 style={{ fontSize: '14px', marginBottom: '8px' }}>🎓 毕业去向</h4>
                <p style={{ fontSize: '12px', color: '#666', margin: 0, textAlign: 'justify' }}>
                  深造比例长期保持在80%以上，2022届毕业生读研及出国深造率达86.5%...
                </p>
              </div>
              <div
                style={{
                  borderTop: '1px solid #eee',
                  paddingTop: '16px',
                  marginTop: '16px',
                  textAlign: 'left',
                }}
              >
                <h4 style={{ fontSize: '14px', marginBottom: '8px' }}>🔬 科研平台与成果</h4>
                <p style={{ fontSize: '12px', color: '#666', margin: 0, textAlign: 'justify' }}>
                  建有五个省部级科研平台，牵头40余项重大项目，研究成果广泛应用于金融、电信、物流等行业...
                </p>
              </div>
              <div
                style={{
                  borderTop: '1px solid #eee',
                  paddingTop: '16px',
                  marginTop: '16px',
                  textAlign: 'left',
                }}
              >
                <h4 style={{ fontSize: '14px', marginBottom: '8px' }}>🤝 产教融合</h4>
                <p style={{ fontSize: '12px', color: '#666', margin: 0, textAlign: 'justify' }}>
                  与阿里、腾讯、华为等知名企业共建11个联合实验室，协同开展技术攻关与人才共育...
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CollegeProfile;
