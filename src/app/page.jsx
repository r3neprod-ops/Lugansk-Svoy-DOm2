'use client';

import { useEffect, useMemo, useState } from 'react';
import brand from '@/data/brand';
import complexes from '@/data/complexes';
import reviews from '@/data/reviews';
import faq from '@/data/faq';
import Button from '@/components/ui/Button';
import IconButton from '@/components/ui/IconButton';
import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Carousel from '@/components/ui/Carousel';
import Accordion from '@/components/ui/Accordion';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import SlotBox from '@/components/slots/SlotBox';
import LeadModal from '@/components/modals/LeadModal';

const nav = [
  { label: 'О нас', id: 'o-nas' },
  { label: 'Как работаем', id: 'kak-rabotaem' },
  { label: 'Направления', id: 'napravleniya' },
  { label: 'ЖК', id: 'complexes' },
  { label: 'Услуги', id: 'uslugi' },
  { label: 'Отзывы', id: 'otzyvy' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Контакты', id: 'kontakty' },
];

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const closed = sessionStorage.getItem('lead-modal-closed');
    if (!closed) setModalOpen(true);
  }, []);

  const closeModal = () => {
    sessionStorage.setItem('lead-modal-closed', '1');
    setModalOpen(false);
  };

  const quickContacts = useMemo(
    () => [
      { label: 'Telegram', href: brand.telegramUrl, icon: '✈️' },
      { label: 'WhatsApp', href: brand.whatsappUrl, icon: '💬' },
      { label: brand.phoneDisplay, href: `tel:${brand.phoneHref}`, icon: '📞' },
    ],
    []
  );

  return (
    <main>
      <Header onLeadOpen={() => setModalOpen(true)} />
      <Hero onLeadOpen={() => setModalOpen(true)} quickContacts={quickContacts} />
      <Directions />
      <TelegramCTA />
      <HowItWorks />
      <Complexes />
      <Services />
      <Reviews />
      <Faq />
      <Contacts onLeadOpen={() => setModalOpen(true)} />
      <Footer />
      <LeadModal isOpen={modalOpen} onClose={closeModal} />
    </main>
  );
}

function Header({ onLeadOpen }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--color-border)] bg-[rgba(11,15,25,0.7)] backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-3 md:h-[72px]">
        <a href="#top" className="text-lg font-bold">{brand.name}</a>
        <nav className="hidden items-center gap-4 text-sm text-[var(--color-muted)] lg:flex">
          {nav.map((item) => <a key={item.id} href={`#${item.id}`} className="hover:text-white">{item.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <IconButton as="a" href={brand.telegramUrl}>✈️</IconButton>
          <IconButton as="a" href={brand.whatsappUrl}>💬</IconButton>
          <Button className="hidden md:inline-flex" onClick={onLeadOpen}>Подобрать варианты</Button>
          <Button as="a" variant="secondary" href={`tel:${brand.phoneHref}`}>Позвонить</Button>
        </div>
      </Container>
    </header>
  );
}

function Hero({ onLeadOpen, quickContacts }) {
  return (
    <section id="o-nas" className="relative overflow-hidden pt-[104px] pb-14">
      <SlotBox slotKey="hero-bg" kind="bg" className="absolute inset-0" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(120deg, rgba(34,197,94,0.22) 0%, rgba(56,189,248,0.16) 45%, rgba(15,23,42,0.0) 100%)' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(11,15,25,0.82) 0%, rgba(11,15,25,0.55) 55%, rgba(11,15,25,0.92) 100%)' }} />
      <Container className="relative grid items-center gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-muted)]">Ипотечный брокер в Луганске</p>
          <h1 className="mt-4 text-[36px] font-extrabold leading-[1.05] md:text-[56px]">Подберём ЖК и поможем с ипотекой в Луганске</h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--color-muted)]">Сравним условия банков, подготовим документы и сопроводим до подписания договора без лишней бюрократии.</p>
          <ul className="mt-5 grid gap-2 text-sm text-[var(--color-muted)] md:grid-cols-3">
            <li>● Подбор ЖК под ваш бюджет</li><li>● Одобрение по актуальным программам</li><li>● Полное сопровождение сделки</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button onClick={onLeadOpen}>Подобрать варианты</Button>
            <Button as="a" variant="secondary" href={brand.telegramUrl}>Написать в Telegram</Button>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {quickContacts.map((item) => (
              <a key={item.label} href={item.href} className="group rounded-xl border border-[var(--color-border)] bg-white/5 px-4 py-3 transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10">
                <div className="flex items-center gap-2"><span>{item.icon}</span><span className="text-sm font-medium">{item.label}</span></div>
              </a>
            ))}
          </div>
        </div>
        <div className="relative min-h-[360px] lg:col-span-5">
          <SlotBox slotKey="hero-photo-1" kind="image" className="absolute right-0 top-0 h-[260px] w-full rounded-2xl md:w-[360px]" />
          <SlotBox slotKey="mascot-hero" kind="mascot" className="absolute bottom-0 left-4 h-[260px] w-[220px] rounded-2xl" />
        </div>
      </Container>
    </section>
  );
}

function Directions() {
  const items = [
    ['Новостройки', 'Подбор комплексов с актуальными ценами и сроками сдачи.'],
    ['ЖК-партнёры', 'Варианты от проверенных застройщиков с приоритетным бронированием.'],
    ['Семейная ипотека', 'Подбор программы с комфортным ежемесячным платежом.'],
    ['Господдержка', 'Разбираем условия льготных программ и требования банков.'],
    ['Рефинансирование', 'Снижаем ставку и пересобираем условия по текущему кредиту.'],
    ['Консультация', 'Разберём вашу ситуацию и составим пошаговый план.'],
  ];
  return (
    <Section id="napravleniya" title="Направления" subtitle="Плотная подборка решений под задачу: от выбора ЖК до финального одобрения банка.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map(([title, text], idx) => (
          <Card key={title} className={`${idx < 2 ? 'lg:col-span-2' : ''} p-5 transition hover:-translate-y-1 hover:border-white/35`}>
            <div className="flex items-start justify-between gap-4"><h3 className="text-xl font-semibold">{title}</h3><span>↗</span></div>
            <p className="mt-2 text-[var(--color-muted)]">{text}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function TelegramCTA() {
  return (
    <Section>
      <Card className="overflow-hidden p-8" >
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center" style={{ background: 'linear-gradient(120deg, rgba(34,197,94,0.26), rgba(56,189,248,0.2))' }}>
          <div>
            <h3 className="text-2xl font-bold">Консультация онлайн в Telegram</h3>
            <p className="mt-2 text-[var(--color-muted)]">Ответим на вопросы по ипотеке и сразу предложим подходящие варианты.</p>
          </div>
          <Button as="a" href={brand.telegramUrl}>Написать в Telegram</Button>
        </div>
      </Card>
    </Section>
  );
}

function HowItWorks() {
  const steps = ['Уточняем параметры', 'Подбираем ЖК', 'Сравниваем банки', 'Сопровождаем документы', 'Выходим на сделку'];
  return (
    <Section id="kak-rabotaem" title="Как работаем">
      <div className="grid gap-3 md:grid-cols-5">
        {steps.map((item, i) => (
          <div key={item} className="relative rounded-xl border border-[var(--color-border)] p-4">
            <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border)]">{i + 1}</span>
            <p className="text-sm font-medium">{item}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Complexes() {
  return (
    <Section id="complexes" title="Жилые комплексы" subtitle="Актуальные предложения для быстрого старта подбора.">
      <Carousel>
        {complexes.map((item) => (
          <Card key={item.id} className="min-w-[290px] max-w-[320px] overflow-hidden">
            <SlotBox slotKey={`complex-${item.id}-cover`} kind="image" className="h-[160px] md:h-[180px]" />
            <div className="space-y-2 p-4">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-[var(--color-muted)]">{item.location}</p>
              <p className="font-medium text-[var(--color-primary)]">{item.priceFrom}</p>
              <div className="flex flex-wrap gap-2">{item.tags.map((tag) => <span key={tag} className="rounded-full border border-[var(--color-border)] px-2 py-1 text-xs">{tag}</span>)}</div>
              <Button variant="secondary" className="w-full">Подробнее</Button>
            </div>
          </Card>
        ))}
      </Carousel>
    </Section>
  );
}

function Services() {
  const items = [
    ['Подбор ЖК или участка', 'Подбираем локацию и формат под ваш бюджет и цель покупки.'],
    ['Оформление под ключ', 'Ведём процесс от первой заявки до подписания договора.'],
    ['Анализ условий банков', 'Сравниваем ставки, платежи и требования по документам.'],
    ['Оформление ипотеки', 'Формируем и подаём пакет документов корректно с первого раза.'],
    ['Консультации по ипотеке', 'Объясняем понятным языком, что реально получить именно вам.'],
    ['Поддержка при одобрении', 'Оперативно отвечаем на запросы банка и ускоряем решение.'],
    ['Сопровождение сделки', 'Контролируем этапы и дедлайны до финального подписания.'],
    ['Мониторинг процесса', 'Следим за статусами и информируем вас без ожидания.'],
    ['Подписание договора', 'Проверяем финальные условия перед выходом на сделку.'],
  ];
  return (
    <Section id="uslugi" title="Услуги">
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {items.map(([title, text]) => <Card key={title} className="p-4"><h3 className="font-semibold">{title}</h3><p className="text-sm text-[var(--color-muted)]">{text}</p></Card>)}
      </div>
    </Section>
  );
}

function Reviews() {
  return (
    <Section id="otzyvy" title="Отзывы клиентов">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((item) => (
          <Card key={item.id} className="p-4">
            <div className="mb-3 flex items-center gap-3">
              <SlotBox slotKey={`review-${item.id}-avatar`} kind="avatar" className="h-12 w-12" />
              <div><p className="font-medium">{item.name}</p><span className="rounded-full border border-[var(--color-border)] px-2 py-1 text-xs">{item.sourceLabel}</span></div>
            </div>
            <p className="text-sm text-[var(--color-muted)]">{item.text}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Faq() {
  return <Section id="faq" title="FAQ"><Accordion items={faq} /></Section>;
}

function Contacts({ onLeadOpen }) {
  return (
    <Section id="kontakty" title="Контакты">
      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="p-5">
          <form className="space-y-3">
            <Input placeholder="Имя" />
            <Input placeholder="Телефон" />
            <Textarea rows={4} placeholder="Сообщение" />
            <Button type="button" className="w-full" onClick={onLeadOpen}>Подобрать варианты</Button>
          </form>
        </Card>
        <Card className="space-y-3 p-5 text-sm">
          <p><a href={brand.telegramUrl}>Telegram</a> · <a href={brand.whatsappUrl}>WhatsApp</a> · <a href={`tel:${brand.phoneHref}`}>{brand.phoneDisplay}</a></p>
          <p>{brand.ipLabel}</p>
          <p>{brand.ipInn}</p>
          <p className="text-[var(--color-muted)]">Пн–Сб: 09:00–19:00</p>
        </Card>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-10">
      <Container className="grid gap-4 md:grid-cols-3">
        <div><p className="font-semibold">{brand.name}</p><p className="text-sm text-[var(--color-muted)]">Ипотека и подбор ЖК под ключ.</p></div>
        <div className="text-sm text-[var(--color-muted)]">{nav.map((item) => <a className="mr-3" key={item.id} href={`#${item.id}`}>{item.label}</a>)}</div>
        <div className="text-sm"><a href="#">Политика конфиденциальности</a><p className="mt-2 text-[var(--color-muted)]">{brand.ipLabel}<br />{brand.ipInn}</p></div>
      </Container>
    </footer>
  );
}

