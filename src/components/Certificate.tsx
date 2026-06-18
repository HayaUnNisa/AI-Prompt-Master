interface CertificateProps {
  studentName?: string
  courseTitle: string
  instructor?: string
}

export default function Certificate({
  studentName,
  courseTitle,
  instructor = 'Prompt Master Team',
}: CertificateProps) {
  const finalStudentName =
    studentName || localStorage.getItem('studentName') || 'Student'

  const date = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const certificateId = `PM-${Date.now()}`

  const handlePrint = () => {
    const printWindow = window.open('', '', 'width=1200,height=800')

    if (!printWindow) return

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Prompt Master Certificate</title>
          <style>
            @page {
              size: A4 landscape;
              margin: 0;
            }

            * {
              box-sizing: border-box;
            }

            html, body {
              margin: 0;
              padding: 0;
              width: 100%;
              height: 100%;
              font-family: Georgia, 'Times New Roman', serif;
              background: #f8fafc;
              color: #111827;
            }

            .page {
              width: 297mm;
              height: 210mm;
              padding: 18mm;
              background:
                radial-gradient(circle at top left, rgba(124, 58, 237, 0.12), transparent 35%),
                radial-gradient(circle at bottom right, rgba(14, 165, 233, 0.12), transparent 35%),
                #f8fafc;
            }

            .certificate {
              position: relative;
              width: 100%;
              height: 100%;
              background: white;
              border: 10px solid #4c1d95;
              padding: 22mm;
              text-align: center;
              overflow: hidden;
            }

            .certificate::before {
              content: "";
              position: absolute;
              inset: 10mm;
              border: 2px solid #c4b5fd;
            }

            .certificate::after {
              content: "";
              position: absolute;
              inset: 15mm;
              border: 1px solid #ddd6fe;
            }

            .content {
              position: relative;
              z-index: 2;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }

            .label {
              font-family: Arial, sans-serif;
              font-size: 14px;
              letter-spacing: 6px;
              text-transform: uppercase;
              color: #7c3aed;
              font-weight: 700;
              margin-bottom: 14px;
            }

            .brand {
              font-size: 50px;
              font-weight: 700;
              margin: 0 0 24px;
              color: #111827;
            }

            .text {
              font-family: Arial, sans-serif;
              font-size: 20px;
              color: #475569;
              margin: 0 0 12px;
            }

            .student {
              font-size: 58px;
              color: #4c1d95;
              font-weight: 700;
              margin: 0 0 18px;
              padding: 0 70px 10px;
              border-bottom: 2px solid #111827;
            }

            .course {
              font-size: 34px;
              font-weight: 700;
              color: #111827;
              margin: 0 0 34px;
              max-width: 850px;
            }

            .seal {
              width: 96px;
              height: 96px;
              border-radius: 999px;
              border: 5px solid #f59e0b;
              background: #fef3c7;
              color: #92400e;
              display: flex;
              align-items: center;
              justify-content: center;
              font-family: Arial, sans-serif;
              font-size: 12px;
              font-weight: 800;
              letter-spacing: 1px;
              margin-bottom: 30px;
            }

            .footer {
              width: 80%;
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 70px;
              margin-top: 4px;
              font-family: Arial, sans-serif;
            }

            .line {
              border-top: 2px solid #111827;
              padding-top: 10px;
              font-size: 14px;
              color: #475569;
            }

            .bold {
              display: block;
              margin-top: 4px;
              color: #111827;
              font-weight: 700;
            }

            .id {
              margin-top: 28px;
              font-family: Arial, sans-serif;
              font-size: 12px;
              color: #64748b;
            }
          </style>
        </head>

        <body>
          <div class="page">
            <div class="certificate">
              <div class="content">
                <div class="label">Certificate of Completion</div>
                <h1 class="brand">Prompt Master Academy</h1>

                <p class="text">This certifies that</p>
                <h2 class="student">${finalStudentName}</h2>

                <p class="text">has successfully completed</p>
                <h3 class="course">${courseTitle}</h3>

                <div class="seal">VERIFIED</div>

                <div class="footer">
                  <div class="line">
                    Instructor Signature
                    <span class="bold">${instructor}</span>
                  </div>

                  <div class="line">
                    Date Completed
                    <span class="bold">${date}</span>
                  </div>
                </div>

                <div class="id">Certificate ID: ${certificateId}</div>
              </div>
            </div>
          </div>

          <script>
            window.onload = function () {
              window.focus()
              window.print()
            }
          </script>
        </body>
      </html>
    `)

    printWindow.document.close()
  }

  return (
    <div className="rounded-3xl border border-border bg-surface/50 p-6">
      <div className="relative overflow-hidden rounded-3xl border-[8px] border-purple-600 bg-gradient-to-br from-slate-950 via-[#111827] to-[#070713] p-8 text-center shadow-2xl">
        <div className="absolute inset-6 rounded-2xl border border-purple-300/30" />
        <div className="absolute inset-10 rounded-xl border border-purple-400/20" />

        <div className="relative z-10 rounded-2xl bg-white/[0.03] px-8 py-12">
          <p className="mb-4 text-sm font-mono uppercase tracking-[0.35em] text-purple-300">
            Certificate of Completion
          </p>

          <h2 className="mb-8 font-serif text-5xl font-bold text-white">
            Prompt Master Academy
          </h2>

          <p className="mb-3 text-lg text-slate-400">This certifies that</p>

          <h3 className="mx-auto mb-6 inline-block border-b border-slate-500 px-10 pb-3 font-serif text-5xl font-bold text-yellow-300">
            {finalStudentName}
          </h3>

          <p className="mb-3 text-lg text-slate-400">
            has successfully completed
          </p>

          <h4 className="mb-10 font-serif text-3xl font-semibold text-white">
            {courseTitle}
          </h4>

          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border-4 border-yellow-400 bg-yellow-500/10 shadow-lg">
            <span className="text-xs font-bold uppercase tracking-wider text-yellow-300">
              Verified
            </span>
          </div>

          <div className="grid gap-8 border-t border-border pt-8 text-center sm:grid-cols-2">
            <div>
              <div className="mx-auto mb-2 h-px w-44 bg-slate-500" />
              <p className="text-sm text-slate-400">Instructor Signature</p>
              <p className="mt-1 text-sm font-semibold text-white">
                {instructor}
              </p>
            </div>

            <div>
              <div className="mx-auto mb-2 h-px w-44 bg-slate-500" />
              <p className="text-sm text-slate-400">Date Completed</p>
              <p className="mt-1 text-sm font-semibold text-white">{date}</p>
            </div>
          </div>

          <p className="mt-8 text-xs text-slate-500">
            Certificate ID: {certificateId}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={handlePrint}
        className="btn-primary mt-6 w-full justify-center"
      >
        Download / Print Certificate
      </button>
    </div>
  )
}