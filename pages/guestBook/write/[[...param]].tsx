import React, { useState, useEffect } from 'react';
import W from '@components/GuestBook/WriteBeta.styles';
import LogoHeader from '@components/Common/LogoHeader';
import Image from 'next/image';
import Sticker1 from '@public/svgs/sticker-1.svg';
import Sticker2 from '@public/svgs/sticker-2.svg';
import Sticker3 from '@public/svgs/sticker-3.svg';
import Sticker4 from '@public/svgs/sticker-4.svg';
import Sticker5 from '@public/svgs/sticker-5.svg';
import Sticker6 from '@public/svgs/sticker-6.svg';
import Sticker7 from '@public/svgs/sticker-7.svg';
import Sticker8 from '@public/svgs/sticker-8.svg';
import Sticker9 from '@public/svgs/sticker-9.svg';
import Sticker10 from '@public/svgs/sticker-10.svg';
import Sticker11 from '@public/svgs/sticker-11.svg';
import Sticker12 from '@public/svgs/sticker-12.svg';
import QuotationMark1 from '@public/svgs/quotationMark-1.svg';
import QuotationMark2 from '@public/svgs/quotationMark-2.svg';
import QuotationMark3 from '@public/svgs/quotationMark-3.svg';
import QuotationMark4 from '@public/svgs/quotationMark-4.svg';
import QuotationMark5 from '@public/svgs/quotationMark-5.svg';
import { TStickerType } from '@configs/bigContents';
import WarningIcon from '@public/svgs/icon-warning.svg';
import { Checkbox, RadioChangeEvent } from 'antd';
import { useToggle } from 'react-use';
import { useRouter } from 'next/router';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

const stickers = {
  '1': { sticker: Sticker1, quotationMark: QuotationMark1 },
  '2': { sticker: Sticker2, quotationMark: QuotationMark1 },
  '3': { sticker: Sticker3, quotationMark: QuotationMark1 },
  '4': { sticker: Sticker4, quotationMark: QuotationMark1 },
  '5': { sticker: Sticker5, quotationMark: QuotationMark2 },
  '6': { sticker: Sticker6, quotationMark: QuotationMark2 },
  '7': { sticker: Sticker7, quotationMark: QuotationMark3 },
  '8': { sticker: Sticker8, quotationMark: QuotationMark3 },
  '9': { sticker: Sticker9, quotationMark: QuotationMark4 },
  '10': { sticker: Sticker10, quotationMark: QuotationMark4 },
  '11': { sticker: Sticker11, quotationMark: QuotationMark5 },
  '12': { sticker: Sticker12, quotationMark: QuotationMark5 },
};

const WriteBeta: React.FC = () => {
  const router = useRouter();
  const [id] = router.query.param ?? '';
  const [selectedSticker, setSelectedSticker] = useState<TStickerType>('1');
  const onChangeStar = (e: RadioChangeEvent) => {
    setSelectedSticker(e.target.value);
  };
  const [guestBookText, setGuestBookText] = useState('');
  const onChangeGuestBookText: React.ChangeEventHandler<HTMLTextAreaElement> = (e) =>
    setGuestBookText(e.target.value);

  const [alert, onToggleAlert] = useToggle(false);
  const [confirm, onToggleConfirm] = useToggle(false);
  const onClickFinish = () => {
    if (guestBookText.trim().length < 2) {
      onToggleAlert();
    } else {
      onToggleConfirm();
    }
  };
  const [noteId, setNoteId] = useState('');
  useEffect(() => {
    if (id) setNoteId(id as string);
  }, [router.query]);
  const onClickWrite = () => router.push(`/guestBook/list/${noteId}`);
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <>
      <W.GuestBookWriteWrapper>
        <LogoHeader headerIcons={true} />
        <h1>{noteId === 'mySchool' ? `우리 학교 방명록 남기기` : `OO에게 쪽지 쓰기`}</h1>
        <W.TextAreaSection>
          <section>
            <div>
              <Image src={stickers[selectedSticker].quotationMark} alt="quotationMark" />
            </div>
            <div>
              <Image src={stickers[selectedSticker].sticker} alt="sticker" />
            </div>
          </section>
          <W.TextArea
            showCount
            maxLength={200}
            placeholder="남기고 싶은 말을 써주세요."
            bordered={false}
            autoSize={{ minRows: 3, maxRows: 8 }}
            onChange={onChangeGuestBookText}
          />
          {noteId === 'mySchool' ? '' : <Checkbox onChange={onChange}>비공개로 작성하기</Checkbox>}
        </W.TextAreaSection>
        <W.WarningSection>
          <Image src={WarningIcon} alt="warningIcon" />
          &nbsp;비속어 사용은 자제해 주세요!
        </W.WarningSection>
        <W.SelectStarSection>
          <h1>나만의 별을 선택해 주세요</h1>
          <W.StarGroup onChange={onChangeStar} defaultValue={selectedSticker}>
            {Object.entries(stickers).map(([key, value]) => (
              <W.Star key={key} value={key}>
                <Image src={value.sticker} alt="sticker" />
              </W.Star>
            ))}
          </W.StarGroup>
        </W.SelectStarSection>
        <W.FinishButton type="primary" onClick={onClickFinish}>
          <p>작성 완료</p>
        </W.FinishButton>
        <W.AlertModal
          closable={false}
          maskStyle={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}
          open={alert}
          onCancel={onToggleAlert}
          footer={[]}
          centered
        >
          <Image src={Sticker5} alt="sticker" />
          <h2>최소 2자 이상 입력해 주세요!</h2>
          <W.ModalButton type="primary" onClick={onToggleAlert}>
            <p>닫기</p>
          </W.ModalButton>
        </W.AlertModal>
        <W.ConfirmModal
          closable={false}
          maskStyle={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}
          open={confirm}
          footer={[]}
          centered
        >
          <Image src={Sticker1} alt="sticker" />
          <h2>작성을 완료하셨나요?</h2>
          <h3>완료하시면 수정, 삭제가 불가능해요!</h3>
          <W.ModalButton type="primary" onClick={onClickWrite}>
            <p>네, 확인했어요.</p>
          </W.ModalButton>
          <W.ModalButton onClick={onToggleConfirm}>
            <p>더 작성할게요.</p>
          </W.ModalButton>
        </W.ConfirmModal>
      </W.GuestBookWriteWrapper>
    </>
  );
};

export default WriteBeta;
