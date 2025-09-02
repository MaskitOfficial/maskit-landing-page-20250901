// /src/components/admin/SubmissionChecker.tsx
'use client';

import { useState } from 'react';
import { useSubmissionCheck } from '@/hooks/useSubmissionCheck';
import Button from '@/components/ui/Button';
import Alert from '@/components/ui/Alert';

export default function SubmissionChecker() {
  const [apiKey, setApiKey] = useState('');
  const [activeTab, setActiveTab] = useState<'sheet' | 'email'>('sheet');
  const { isLoading, error, submissions, emailLogs, checkSubmissions } = useSubmissionCheck();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await checkSubmissions(apiKey);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">제출 결과 확인</h2>
      
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex space-x-4">
          <div className="flex-1">
            <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 mb-1">
              관리자 API 키
            </label>
            <input
              type="password"
              id="apiKey"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="self-end">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? '로딩 중...' : '결과 확인하기'}
            </Button>
          </div>
        </div>
      </form>
      
      {error && <Alert type="error" message={error} />}
      
      {(submissions.length > 0 || emailLogs.length > 0) && (
        <div>
          <div className="border-b border-gray-200 mb-4">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('sheet')}
                className={`pb-2 px-1 ${
                  activeTab === 'sheet'
                    ? 'border-b-2 border-indigo-500 text-indigo-600'
                    : 'border-b-2 border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                스프레드시트 데이터 ({submissions.length})
              </button>
              <button
                onClick={() => setActiveTab('email')}
                className={`pb-2 px-1 ${
                  activeTab === 'email'
                    ? 'border-b-2 border-indigo-500 text-indigo-600'
                    : 'border-b-2 border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                이메일 로그 ({emailLogs.length})
              </button>
            </nav>
          </div>
          
          {activeTab === 'sheet' && (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      제출 시간
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      공간명
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      대표자명
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      이메일
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      공간 유형
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {submissions.map((submission, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(submission.Timestamp).toLocaleString('ko-KR')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {submission.spaceName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {submission.ownerName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {submission.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {submission.spaceType}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          
          {activeTab === 'email' && (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      시간
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      수신자
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      제목
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      상태
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {emailLogs.map((log, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(log.timestamp).toLocaleString('ko-KR')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {log.recipient}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {log.subject}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          log.status.includes('성공') ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {log.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
      
      <div className="mt-6 border-t pt-4">
        <h3 className="text-lg font-medium mb-2">테스트 데이터 확인하기</h3>
        <p className="text-sm text-gray-600 mb-4">
          실제 제출 데이터와 이메일이 제대로 전송되는지 확인하려면 베타 신청 폼을 통해 테스트 제출을 해보세요.
          <br />
          테스트 데이터임을 명시하면 나중에 실제 데이터와 구분하기 쉽습니다.
        </p>
        <Button onClick={() => window.location.href = '/#beta-signup'}>
          베타 신청 폼으로 이동
        </Button>
      </div>
    </div>
  );
}
