'use client';

import { useMemo, useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

const steps = ['Цель', 'Тип объекта', 'Бюджет', 'Срок', 'Приоритеты', 'Контакты'];

export default function LeadModal({ isOpen, onClose }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    goal: 'Покупка',
    estate: 'Квартира',
    budget: 'До 5 млн ₽',
    budgetExtra: '',
    term: '1–2 месяца',
    priorities: [],
    name: '',
    phone: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const priorityList = ['Район', 'Школа рядом', 'Этаж', 'Ремонт', 'Парковка', 'Срок сдачи'];
  const summary = useMemo(() => `${form.goal}, ${form.estate}, ${form.budget}${form.budgetExtra ? ` (${form.budgetExtra})` : ''}, ${form.term}`, [form]);

  const setValue = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const togglePriority = (v) => {
    setForm((prev) => ({
      ...prev,
      priorities: prev.priorities.includes(v) ? prev.priorities.filter((item) => item !== v) : [...prev.priorities, v],
    }));
  };

  const submit = () => {
    const payload = { ...form, createdAt: new Date().toISOString() };
    console.log(payload);
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-2xl rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">Подобрать варианты</p>
            <h3 className="mt-2 text-2xl font-bold">{submitted ? 'Заявка принята' : steps[step]}</h3>
          </div>
          <button type="button" className="text-2xl leading-none" onClick={onClose}>×</button>
        </div>

        {!submitted ? (
          <>
            <div className="mb-5">
              {step === 0 && <OptionRow value={form.goal} onChange={(v) => setValue('goal', v)} options={['Покупка', 'Ипотека', 'Консультация']} />}
              {step === 1 && <OptionRow value={form.estate} onChange={(v) => setValue('estate', v)} options={['Квартира', 'Дом', 'Участок', 'Новостройка']} />}
              {step === 2 && (
                <div className="space-y-3">
                  <OptionRow value={form.budget} onChange={(v) => setValue('budget', v)} options={['До 5 млн ₽', '5–8 млн ₽', '8–12 млн ₽', 'Выше 12 млн ₽']} />
                  <Input placeholder="Комфортный ежемесячный платёж" value={form.budgetExtra} onChange={(e) => setValue('budgetExtra', e.target.value)} />
                </div>
              )}
              {step === 3 && <OptionRow value={form.term} onChange={(v) => setValue('term', v)} options={['Срочно', '1–2 месяца', '3–6 месяцев']} />}
              {step === 4 && (
                <div className="grid grid-cols-2 gap-2">
                  {priorityList.map((item) => (
                    <label key={item} className="flex cursor-pointer items-center gap-2 rounded-xl border border-[var(--color-border)] p-3 text-sm">
                      <input type="checkbox" checked={form.priorities.includes(item)} onChange={() => togglePriority(item)} />
                      {item}
                    </label>
                  ))}
                </div>
              )}
              {step === 5 && (
                <div className="space-y-3">
                  <Input placeholder="Ваше имя" value={form.name} onChange={(e) => setValue('name', e.target.value)} />
                  <Input placeholder="Телефон" value={form.phone} onChange={(e) => setValue('phone', e.target.value)} />
                </div>
              )}
            </div>

            <div className="flex justify-between gap-3">
              <Button variant="secondary" onClick={() => (step === 0 ? onClose() : setStep(step - 1))}>{step === 0 ? 'Закрыть' : 'Назад'}</Button>
              <Button onClick={() => (step === 5 ? submit() : setStep(step + 1))}>{step === 5 ? 'Получить подборку' : 'Далее'}</Button>
            </div>
          </>
        ) : (
          <div className="space-y-4">
            <p className="text-[var(--color-muted)]">Спасибо! Мы подготовим подборку и свяжемся с вами в ближайшее время.</p>
            <p className="rounded-xl border border-[var(--color-border)] bg-black/20 p-3 text-sm">{summary}</p>
            <Button onClick={onClose}>Закрыть</Button>
          </div>
        )}
      </div>
    </div>
  );
}

function OptionRow({ value, onChange, options }) {
  return (
    <div className="grid gap-2 md:grid-cols-3">
      {options.map((item) => (
        <button
          type="button"
          key={item}
          onClick={() => onChange(item)}
          className={`rounded-xl border p-3 text-sm transition ${value === item ? 'border-[var(--color-primary)] bg-emerald-500/20' : 'border-[var(--color-border)] bg-white/5 hover:bg-white/10'}`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
