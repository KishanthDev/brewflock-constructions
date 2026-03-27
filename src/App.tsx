export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-brewflock-navy text-white text-center p-6">
      <h1 className="section-heading text-white mb-4">
        Brewflock <span className="text-brewflock-orange">Constructions</span>
      </h1>
      <p className="text-slate-400 max-w-md mb-8">
        Building the future of infrastructure with 100% type-safe precision.
      </p>
      <button className="btn-primary">
        View Project
      </button>
    </div>
  )
}