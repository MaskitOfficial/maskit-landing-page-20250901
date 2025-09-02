// /src/app/admin/page.tsx
import SubmissionChecker from '@/components/admin/SubmissionChecker';
import Container from '@/components/ui/Container';

export default function AdminPage() {
  return (
    <main className="py-16 bg-gray-50 min-h-screen">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">관리자 페이지</h1>
          <SubmissionChecker />
        </div>
      </Container>
    </main>
  );
}
