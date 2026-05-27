import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from "docx";
import { saveAs } from "file-saver";
import { 
  FileText, 
  Download, 
  CheckCircle2, 
  LayoutList,
  User,
  Calendar,
  ClipboardList
} from 'lucide-react';

interface GiftednessChecklistProps {
  content: any;
}

export default function GiftednessChecklist({ content }: GiftednessChecklistProps) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    date: new Date().toISOString().split('T')[0],
    evaluator: ''
  });

  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showReport, setShowReport] = useState(false);

  const checklistData = content.checklist;

  const handleAnswerChange = (domainIndex: number, questionIndex: number, value: number) => {
    setAnswers(prev => ({
      ...prev,
      [`d${domainIndex}p${questionIndex}`]: value
    }));
  };

  const calculateDomainScore = (domainIndex: number) => {
    let score = 0;
    const domain = checklistData.domains[domainIndex];
    domain.questions.forEach((_: any, qIndex: number) => {
      score += answers[`d${domainIndex}p${qIndex}`] || 0;
    });
    return score;
  };

  const calculateTotalScore = () => {
    return Object.values(answers).reduce((sum, val) => sum + val, 0);
  };

  const isComplete = () => {
    const totalQuestions = checklistData.domains.reduce((sum: number, d: any) => sum + d.questions.length, 0);
    return Object.keys(answers).length === totalQuestions;
  };

  const handleDownloadDoc = async () => {
    const totalScore = calculateTotalScore();
    const maxTotal = checklistData.domains.reduce((sum: number, d: any) => sum + d.questions.length * 5, 0);

    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              text: checklistData.labels.reportTitle,
              heading: HeadingLevel.HEADING_1,
              alignment: AlignmentType.CENTER,
              spacing: { after: 400 }
            }),
            new Paragraph({
              children: [
                new TextRun({ text: `${checklistData.labels.student} `, bold: true }),
                new TextRun(formData.name),
              ],
              spacing: { after: 200 }
            }),
            new Paragraph({
              children: [
                new TextRun({ text: `${checklistData.labels.age} `, bold: true }),
                new TextRun(formData.age || '-'),
                new TextRun({ text: `    ${checklistData.labels.date} `, bold: true }),
                new TextRun(formData.date),
              ],
              spacing: { after: 200 }
            }),
            new Paragraph({
              children: [
                new TextRun({ text: `${checklistData.labels.evaluator} `, bold: true }),
                new TextRun(formData.evaluator || '-'),
              ],
              spacing: { after: 400 }
            }),
            ...checklistData.domains.map((domain: any, dIndex: number) => {
              const domainScore = calculateDomainScore(dIndex);
              const maxDomainScore = domain.questions.length * 5;
              return [
                new Paragraph({
                  text: domain.title,
                  heading: HeadingLevel.HEADING_2,
                  spacing: { before: 200, after: 100 }
                }),
                new Paragraph({
                  text: `${domainScore} / ${maxDomainScore}`,
                  alignment: AlignmentType.RIGHT,
                })
              ];
            }).flat(),
            new Paragraph({
              children: [
                new TextRun({ text: `${checklistData.labels.totalScore} `, bold: true, size: 28 }),
                new TextRun({ text: `${totalScore} / ${maxTotal}`, bold: true, size: 28 }),
              ],
              alignment: AlignmentType.RIGHT,
              spacing: { before: 400, after: 400 },
            }),
            new Paragraph({
              text: checklistData.labels.disclaimer,
              italics: true,
              alignment: AlignmentType.CENTER,
              spacing: { before: 400 },
            }),
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, `Relatorio_${formData.name.replace(/\s+/g, '_') || 'Avaliacao'}.docx`);
  };

  if (showReport) {
    const totalScore = calculateTotalScore();
    const maxTotal = checklistData.domains.reduce((sum: number, d: any) => sum + d.questions.length * 5, 0);

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8 print:p-0"
      >
        <div className="bg-white p-8 md:p-16 rounded-[3rem] border-4 border-[#F0FAF4] shadow-[0_8px_30px_rgba(143,185,150,0.05)] space-y-10 relative overflow-hidden print:shadow-none print:border-none print:rounded-none print:p-0 print:m-0">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-4xl font-serif font-black text-[#2D3A30] mb-3">{checklistData.labels.reportTitle}</h2>
              <div className="space-y-2 text-[#4F6153] font-serif italic">
                <p><strong>{checklistData.labels.student}</strong> {formData.name}</p>
                <div className="flex gap-6">
                  <p><strong>{checklistData.labels.age}</strong> {formData.age}</p>
                  <p><strong>{checklistData.labels.date}</strong> {formData.date}</p>
                </div>
                <p><strong>{checklistData.labels.evaluator}</strong> {formData.evaluator}</p>
              </div>
            </div>
            <FileText className="text-[#8FB996] w-12 h-12 hidden print:block" />
          </div>

          <hr className="border-[#F7FAF8]" />

          <div className="space-y-8">
            {checklistData.domains.map((domain: any, dIndex: number) => {
              const domainScore = calculateDomainScore(dIndex);
              const maxDomainScore = domain.questions.length * 5;
              const percentage = (domainScore / maxDomainScore) * 100;

              return (
                <div key={dIndex} className="space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="font-serif font-bold text-[#3D5245] text-lg">{domain.title}</span>
                    <span className="text-sm font-black text-[#8FB996] font-mono">{domainScore} / {maxDomainScore}</span>
                  </div>
                  <div className="h-3 bg-[#F7FAF8] rounded-full overflow-hidden border border-[#EBF2EE]">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      className="h-full bg-[#8FB996] rounded-full shadow-[0_0_10px_rgba(143,185,150,0.2)]"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-10 border-t-2 border-[#F7FAF8] mt-10">
            <div className="flex justify-between items-center">
              <span className="text-3xl font-serif font-black text-[#2D3A30]">{checklistData.labels.totalScore}</span>
              <span className="text-5xl font-serif font-black text-[#8FB996]">{totalScore} / {maxTotal}</span>
            </div>
          </div>

          <p className="text-sm text-[#A7BDB1] italic mt-10 font-serif text-center max-w-lg mx-auto">
            {checklistData.labels.disclaimer}
          </p>

          <div className="flex justify-center gap-6 no-print print:hidden pt-10">
            <button
              onClick={() => setShowReport(false)}
              className="px-10 py-4 bg-[#F7FAF8] text-[#627A6C] rounded-2xl font-bold hover:bg-[#EBF2EE] transition-all border border-[#E1EDE6]"
            >
              Back
            </button>
            <button
              onClick={handleDownloadDoc}
              className="px-10 py-4 bg-[#8FB996] text-white rounded-2xl font-bold hover:bg-[#7DA884] shadow-lg shadow-[#8FB996]/20 flex items-center gap-2"
            >
              <Download size={20} />
              {checklistData.labels.saveDoc}
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-12">
      <div className="max-w-2xl">
        <h2 className="text-5xl font-serif font-bold tracking-tight mb-4 text-[#2D3A30]">{checklistData.title}</h2>
        {checklistData.description && (
          <p className="text-xl text-[#4F6153] leading-relaxed mb-8 font-serif italic">
            {checklistData.description}
          </p>
        )}
        <div className="p-6 bg-[#FAF7F0] border-l-4 border-[#B9A68F] text-[#6B5A45] rounded-r-2xl text-sm italic font-medium shadow-sm">
          {checklistData.instructions}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#F0FAF4]/50 p-10 rounded-[2.5rem] border border-[#DEEBE2]">
        <div className="space-y-2">
          <label className="text-xs font-bold text-[#A7BDB1] uppercase tracking-widest flex items-center gap-2 px-1">
            <User size={14} /> {checklistData.labels.name}
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="w-full px-5 py-4 bg-white rounded-2xl border border-[#E1EDE6] focus:ring-2 focus:ring-[#8FB996]/30 outline-none transition-all font-medium"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-[#A7BDB1] uppercase tracking-widest flex items-center gap-2 px-1">
            <LayoutList size={14} /> {checklistData.labels.age}
          </label>
          <input
            type="text"
            value={formData.age}
            onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
            className="w-full px-5 py-4 bg-white rounded-2xl border border-[#E1EDE6] focus:ring-2 focus:ring-[#8FB996]/30 outline-none transition-all font-medium"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-[#A7BDB1] uppercase tracking-widest flex items-center gap-2 px-1">
            <Calendar size={14} /> {checklistData.labels.date}
          </label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
            className="w-full px-5 py-4 bg-white rounded-2xl border border-[#E1EDE6] focus:ring-2 focus:ring-[#8FB996]/30 outline-none transition-all font-medium"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-[#A7BDB1] uppercase tracking-widest flex items-center gap-2 px-1">
            <ClipboardList size={14} /> {checklistData.labels.evaluator}
          </label>
          <input
            type="text"
            value={formData.evaluator}
            onChange={(e) => setFormData(prev => ({ ...prev, evaluator: e.target.value }))}
            className="w-full px-5 py-4 bg-white rounded-2xl border border-[#E1EDE6] focus:ring-2 focus:ring-[#8FB996]/30 outline-none transition-all font-medium"
          />
        </div>
      </div>

      <div className="space-y-16">
        {checklistData.domains.map((domain: any, dIndex: number) => (
          <div key={dIndex} className="space-y-8">
            <h3 className="text-3xl font-serif font-bold text-[#3D5245] flex items-center gap-4 border-b border-[#EBF2EE] pb-4">
              <CheckCircle2 size={30} className="text-[#8FB996]" />
              {domain.title}
            </h3>
            <div className="space-y-3">
              {domain.questions.map((question: string, qIndex: number) => (
                <div key={qIndex} className="p-8 bg-white rounded-[2rem] border border-[#EBF2EE] flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all hover:border-[#C9DED2] hover:shadow-sm group">
                  <p className="text-[#4F6153] font-medium md:max-w-xl leading-relaxed">
                    <span className="text-[#C9DED2] font-mono text-sm mr-3">{qIndex + 1}.</span>
                    {question}
                  </p>
                  <div className="flex gap-2 p-1 bg-[#F7FAF8]/50 rounded-2xl border border-[#EBF2EE] overflow-x-auto no-scrollbar">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <button
                        key={num}
                        onClick={() => handleAnswerChange(dIndex, qIndex, num)}
                        className={`w-11 h-11 md:w-14 md:h-14 rounded-xl text-sm font-black transition-all border-2 ${
                          answers[`d${dIndex}p${qIndex}`] === num
                            ? 'bg-[#8FB996] text-white border-[#8FB996] shadow-lg transform scale-105'
                            : 'bg-white text-[#C9DED2] border-white hover:border-[#EBF2EE] hover:text-[#8FB996]'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-12 pb-24">
        <button
          disabled={!isComplete() || !formData.name}
          onClick={() => setShowReport(true)}
          className="px-16 py-6 bg-[#8FB996] text-white rounded-[3rem] font-black text-xl hover:bg-[#7DA884] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-2xl shadow-[#8FB996]/20 flex items-center gap-4 hover:scale-105 active:scale-95"
        >
          <FileText size={28} />
          {checklistData.labels.finish}
        </button>
      </div>
    </div>
  );
}
