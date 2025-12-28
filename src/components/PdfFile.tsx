import {useEffect, useState} from 'react';
import {SpecialZoomLevel, Viewer, Worker} from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import * as pdfjsLib from 'pdfjs-dist';

interface PdfEmbedProps {
  file: string;
}

const PdfFile: React.FC<PdfEmbedProps> = ({ file }) => {
  const [pageWidth, setPageWidth] = useState<number | null>(null);

  useEffect(() => {
    const loadPdfMeta = async () => {
      const loadingTask = pdfjsLib.getDocument(file);
      const pdf = await loadingTask.promise;
      const page = await pdf.getPage(1);

      // scale = 1 means original PDF width
      const viewport = page.getViewport({ scale: 1 });

      console.log('viewport.width ::: ', viewport.width);
      

      setPageWidth(viewport.width);
    };

    loadPdfMeta();
  }, [file]);

  return (
    <div className="mx-auto bg-gray-100" style={{width: pageWidth ? `${pageWidth-440}px` : '100%'}}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <Viewer
          fileUrl={file}
          defaultScale={SpecialZoomLevel.PageWidth}
          renderLoader={() => (
            <div className="flex items-center justify-center min-h-screen text-black">
              Loading PDF...
            </div>
          )}
        />
      </Worker>
    </div>
  );
};

export default PdfFile;
