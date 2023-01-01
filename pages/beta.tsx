import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from 'antd';
import { useRouter } from 'next/router';

import betaImages from '@configs/betaImages';

import Banner from '@components/Beta/Banner';
import B from '@components/Beta/Beta.styles';

const Beta: React.FC = () => {
  const router = useRouter();

  const onClickStart = () => router.push('/login');

  return (
    <div>
      <B.GlobalStyle />
      <Banner onClick={onClickStart} />
      <B.NumberSection>
        <div>
          <div>
            <Image src={betaImages.BetaHeart} alt="beta-heart" />
            <h3>290명</h3>
            <p>총 참여자 수</p>
          </div>
          <div>
            <Image src={betaImages.BetaSchool} alt="beta-school" />
            <h3>213개</h3>
            <p>활성화된 학교 수</p>
          </div>
          <div>
            <Image src={betaImages.BetaLetter} alt="beta-letter" />
            <h3>156개</h3>
            <p>누적 방명록 수</p>
          </div>
        </div>
      </B.NumberSection>
      <B.ExamSection>
        <div>
          <h2>
            오랜만에 만난 반가운 친구들과
            <br />
            <span>
              <span>학교 통계와 방명록으로</span>
              <div className="bar" />
            </span>
            <br />
            근황을 나누며 동창회를 즐겨보세요!
          </h2>
          <div>
            <Image src={betaImages.BetaJob} alt="beta-job" />
            <div className="job">
              <Image src={betaImages.BetaChart} alt="beta-chart" />
              <span>동창 정보 통계</span>
              <h3>
                간단한 가입을 통해
                <br />
                친구들의 근황을 통계로
                <br /> 확인해 보세요!
              </h3>
              <p>
                동창들은 어떤 분야에서 일하고 있을까?
                <br /> 아직 우리 동네에서 살고 있을까?
                <br /> 그때는 몰랐던 동창들의 MBTI는 뭘까?
                <br />내 정보를 입력하고 지금 바로 학교 통계에서
                <br /> 확인해 보세요!
              </p>
            </div>
          </div>
          <div>
            <div className="exam">
              <Image src={betaImages.BetaPaper} alt="beta-paper" />
              <span>방명록, 쪽지 작성</span>
              <h3>
                보고 싶은 친구들에게 <br />
                학교 방명록과 <br />
                쪽지를 남겨보세요
              </h3>
              <p>
                그동안 연락이 닿지 못했던 <br />
                친구들에게 하고 싶은 말이 있나요? <br />
                우리 학교 공간에 익명으로 방명록을 남기거나 <br />
                친구 사물함에 쪽지를 남길 수 있어요
              </p>
            </div>
            <Image src={betaImages.BetaExam} alt="beta-exam" />
          </div>
        </div>
      </B.ExamSection>
      <B.QuestionSection>
        <div>
          <h2>
            초등학교 동창 친구들은 <br />
            지금 뭐하고 지낼까?
          </h2>
          <h3>
            moyora는 우리 학교 동창 친구들의 근황을 통계로 확인하고 <br />
            방명록과 쪽지로 추억을 나눌 수 있는 서비스입니다.
          </h3>
          <Image src={betaImages.BetaExam2} alt="beta-exam2" />
        </div>
      </B.QuestionSection>
      <B.EndSection>
        <div>
          <h2>
            당신을 보고 싶어 하는 동창 친구들이 모이고 있어요 <br />
            지금 바로 시작해 보세요!
          </h2>
          <Button type="primary" onClick={onClickStart}>
            모여라 시작하기
          </Button>
        </div>
      </B.EndSection>
      <B.LinkSection>
        <div>
          <h2>
            더 많은 동창 친구들이 모일 수 있도록
            <br />
            친구에게 공유해 보세요!
          </h2>
          <div>
            <div>
              <Button shape="circle">
                <Image src={betaImages.KakaoIcon} alt="kakao-icon" />
              </Button>
              <p>카카오톡</p>
            </div>
            <div>
              <Button shape="circle">
                <Image src={betaImages.LinkIcon} alt="link-icon" />
              </Button>
              <p>링크 복사</p>
            </div>
          </div>
        </div>
      </B.LinkSection>
      <B.FooterSection>
        <div>
          <Link href="">반갑다친구야</Link>
          <div>
            <Link href="">서비스 이용약관</Link>
            <Link href="">개인정보 처리방침</Link>
          </div>
        </div>
      </B.FooterSection>
    </div>
  );
};

export default Beta;
