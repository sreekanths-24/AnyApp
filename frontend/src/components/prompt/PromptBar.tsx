export default function PromptBar() {
  return (
    <div className="border-t border-zinc-800">
      <input
        type="text"
              placeholder="Describe your app.."
              className="w-full p-4 focus:outline-none"
      />
    </div>
  );
}