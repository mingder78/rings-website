// app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="grid sm:grid-rows-[repeat(auto-fit,minmax(200px,1fr))] lg:grid-rows-[repeat(auto-fit,minmax(1000px,1fr))] auto-rows-fr gap-4 sm:bg-gray-200 p-40">
      <div className="bg-blue-100 border border-blue-400 p-4 h-full flex flex-col">
        <h2 className="font-bold">項目 1</h2>
        <p>內容較短。</p>
      </div>

      <div className="bg-blue-100 border border-blue-400 p-4 h-full flex flex-col">
        <h2 className="font-bold">項目 2</h2>
        <p>
          這裡的內容非常多...
          <br />
          多到會把
          <br />
          整列的高度
          <br />
          撐開！
        </p>
      </div>
    </div>
  );
}
