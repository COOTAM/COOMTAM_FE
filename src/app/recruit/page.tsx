import { Metadata } from 'next';

import FAQList from '@/components/FAQList';
import Button from '@/components/common/Button';
import DescriptionCard from '@/components/common/DescriptionCard';
import { KAKAO_OPEN_CHAT_URL, RECRUITMENT_FORM_URL } from '@/constants/externalLinks';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: '모집 안내',
  };
}

export default function Recruit() {
  return (
    <main className="box-border flex min-h-screen w-full flex-col gap-y-[100px] p-10 lg:w-[1024px]">
      <section aria-label="모집 일정" className="flex flex-col gap-y-6">
        <h2 className="galmuri11-headline-3">모집 일정</h2>
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col gap-3 md:flex-row">
            <DescriptionCard
              variant="lightBlue"
              title="모집 기간"
              contents="2024.10.08 - 2024.10.11"
              className="flex-1"
            />
            <DescriptionCard
              variant="lightBlue"
              title="발표"
              contents="2024.10.16"
              className="flex-1"
            />
          </div>
          <a href={RECRUITMENT_FORM_URL} target="_blank" rel="noopener noreferrer">
            <Button className="w-full">코탐 지원하기 ⇗</Button>
          </a>
        </div>
      </section>
      <section aria-label="지원 자격" className="flex flex-col gap-y-6">
        <h2 className="galmuri11-headline-3">지원 자격</h2>
        <div className="flex flex-col gap-3 md:flex-row">
          <DescriptionCard title="직군" contents="기획자, 디자이너, 개발자" className="flex-1" />
          <DescriptionCard title="연차" contents="경력 3개월 이상" className="flex-1" />
        </div>
      </section>
      <section aria-label="자주 묻는 질문" className="flex flex-col gap-y-6">
        <h2 className="galmuri11-headline-3">자주 묻는 질문</h2>
        <FAQList />
      </section>
      <section aria-label="문의하기" className="gap-3 flex-col-center">
        <p className="galmuri11-body-3">궁금한게 더 있으신가요?</p>
        <a className="w-full" href={KAKAO_OPEN_CHAT_URL} target="_blank" rel="noopener noreferrer">
          <Button variant="blue" className="w-full">
            카카오톡으로 문의하기
          </Button>
        </a>
      </section>
    </main>
  );
}
