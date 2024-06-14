const scheduleData = [
    {
        workGroup: 'Học tiếng Nhật',
        title: 'Học giao tiếp',
        note: 'Học trên youtube',
        startTime: '07:00',
        startDate: '2024-03-15',
        endTime: '08:30',
        endDate: '2024-06-15',
        tasks: [
            { id: '0', name: 'Xem video', completed: false, percentage: "0", startTime: '07:00', startDate: '2024-03-15', endTime: '08:00', endDate: '2024-04-15' },
            { id: '1', name: 'Nói trước gương', completed: true, percentage: "0", startTime: '07:15', startDate: '2024-04-20', endTime: '08:15', endDate: '2024-05-10' }
        ]
    },
    {
        workGroup: 'Học tiếng Nhật',
        title: 'Học ngữ pháp',
        note: 'Làn bài tập ',
        startTime: '14:00',
        startDate: '2024-04-01',
        endTime: '15:00',
        endDate: '2024-07-01',
        tasks: [
            { id: '0', name: 'Học 5 ngữ pháp', completed: false, percentage: "0", startTime: '13:30', startDate: '2024-04-01', endTime: '14:30', endDate: '2024-04-20' },
            { id: '1', name: 'Làm bài tập', completed: true, percentage: "0", startTime: '14:00', startDate: '2024-05-01', endTime: '15:00', endDate: '2024-05-15' },
            { id: '2', name: 'Ôn lại kiến thức', completed: false, percentage: "0", startTime: '13:45', startDate: '2024-06-10', endTime: '14:45', endDate: '2024-06-25' }
        ]
    },
    {
        workGroup: 'Học tiếng Nhật',
        title: 'Học từ vựng',
        note: 'Học trong sách Mina Nihongo',
        startTime: '20:00',
        startDate: '2024-02-20',
        endTime: '21:30',
        endDate: '2024-05-20',
        tasks: [
            { id: '0', name: 'Học 20 từ vựng', completed: true, percentage: "0", startTime: '09:00', startDate: '2024-02-20', endTime: '10:00', endDate: '2024-03-20' },
            { id: '1', name: 'Viết chữ hán', completed: true, percentage: "0", startTime: '09:30', startDate: '2024-03-25', endTime: '10:30', endDate: '2024-04-10' },
            { id: '2', name: 'Đặt câu', completed: false, percentage: "0", startTime: '09:45', startDate: '2024-04-15', endTime: '10:15', endDate: '2024-05-05' },
            { id: '3', name: 'Làm bài tập', completed: false, percentage: "0", startTime: '09:30', startDate: '2024-05-10', endTime: '10:30', endDate: '2024-05-20' }
        ]
    }
];

export default scheduleData;
