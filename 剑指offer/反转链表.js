function ReverseList(pHead) {
	let pPre = null,
		pNext = null;
	while(pHead !== null) {
		pNext = pHead.next;
		pHead.next = pPre;
		pPre = pHead;
		pHead = pNext;
	}
	return pPre;
}