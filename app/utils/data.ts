type Problem = {
  problem_id: number;
  problem_index: number;
  name: string;
};

type Concept = {
  concept_id: number;
  concept_index: number;
  unit_id: number;
  name: string;
  problems: Problem[];
};

type Unit = {
  unit_id: number;
  unit_index: number;
  name: string;
  concepts: Concept[];
};

export const encode = (str: string): string => {
  const bytes = new TextEncoder().encode(str);
  const binaryStr = String.fromCharCode(...bytes);
  return btoa(binaryStr);
}

export const decode = (encodedStr: string): string => {
  const binaryStr = atob(encodedStr);
  const bytes = Uint8Array.from(binaryStr, char => char.charCodeAt(0));
  return new TextDecoder('utf-8').decode(bytes);
}

export const units: Unit[] = [
  {
    unit_id: 0,
    unit_index: 0,
    name: "Arrays and strings",
    concepts: [
      {
        concept_id: 0,
        concept_index: 0,
        unit_id: 0,
        name: "Two pointers",
        problems: [
          { problem_id: 0, problem_index: 0, name: "Reverse String" },
          { problem_id: 1, problem_index: 1, name: "Squares of a Sorted Array" }
        ]
      },
      {
        concept_id: 1,
        concept_index: 1,
        unit_id: 0,
        name: "Sliding window",
        problems: [
          { problem_id: 2, problem_index: 0, name: "Maximum Average Subarray I" },
          { problem_id: 3, problem_index: 1, name: "Max Consecutive Ones III" }
        ]
      },
      {
        concept_id: 2,
        concept_index: 2,
        unit_id: 0,
        name: "Prefix sum",
        problems: [
          { problem_id: 4, problem_index: 0, name: "Running Sum of 1d Array" },
          { problem_id: 5, problem_index: 1, name: "Minimum Value to Get Positive Step by Step Sum" },
          { problem_id: 6, problem_index: 2, name: "K Radius Subarray Averages" }
        ]
      }
    ]
  },
  {
    unit_id: 1,
    unit_index: 1,
    name: "Hashing",
    concepts: [
      {
        concept_id: 3,
        concept_index: 0,
        unit_id: 1,
        name: "Checking for existence",
        problems: [
          { problem_id: 7, problem_index: 0, name: "Check if the Sentence Is Pangram" },
          { problem_id: 8, problem_index: 1, name: "Missing Number" },
          { problem_id: 9, problem_index: 2, name: "Counting Elements" }
        ]
      },
      {
        concept_id: 4,
        concept_index: 1,
        unit_id: 1,
        name: "Counting",
        problems: [
          { problem_id: 10, problem_index: 0, name: "Find Players With Zero or One Losses" },
          { problem_id: 11, problem_index: 1, name: "Largest Unique Number" },
          { problem_id: 12, problem_index: 2, name: "Maximum Number of Balloons" }
        ]
      }
    ]
  },
  {
    unit_id: 2,
    unit_index: 2,
    name: "Linked lists",
    concepts: [
      {
        concept_id: 5,
        concept_index: 0,
        unit_id: 2,
        name: "Fast and slow pointers",
        problems: [
          { problem_id: 13, problem_index: 0, name: "Middle of the Linked List" },
          { problem_id: 14, problem_index: 1, name: "Remove Duplicates from Sorted List" }
        ]
      },
      {
        concept_id: 6,
        concept_index: 1,
        unit_id: 2,
        name: "Reversing a linked list",
        problems: [
          { problem_id: 15, problem_index: 0, name: "Reverse Linked List II" }
        ]
      }
    ]
  },
  {
    unit_id: 3,
    unit_index: 3,
    name: "Stacks and queues",
    concepts: [
      {
        concept_id: 7,
        concept_index: 0,
        unit_id: 3,
        name: "Stacks",
        problems: [
          { problem_id: 16, problem_index: 0, name: "Simplify Path" },
          { problem_id: 17, problem_index: 1, name: "Make The String Great" }
        ]
      },
      {
        concept_id: 8,
        concept_index: 1,
        unit_id: 3,
        name: "Queues",
        problems: [
          { problem_id: 18, problem_index: 0, name: "Moving Average from Data Stream" }
        ]
      },
      {
        concept_id: 9,
        concept_index: 2,
        unit_id: 3,
        name: "Monotonic",
        problems: [
          { problem_id: 19, problem_index: 0, name: "Next Greater Element I" },
          { problem_id: 20, problem_index: 1, name: "Online Stock Span" }
        ]
      }
    ]
  }
];

export const problem_contents = [
  {
    problem_id: 0,
    problem_index: 0,
    content: {
      markdown: [
        { markdown_id: 0, markdown_index: 0, name: 'description', data: 'V3JpdGUgYSBmdW5jdGlvbiB0aGF0IHJldmVyc2VzIGEgc3RyaW5nLiBUaGUgaW5wdXQgc3RyaW5nIGlzIGdpdmVuIGFzIGFuIGFycmF5IG9mIGNoYXJhY3RlcnMgcy4KCllvdSBtdXN0IGRvIHRoaXMgYnkgbW9kaWZ5aW5nIHRoZSBpbnB1dCBhcnJheSBpbi1wbGFjZSB3aXRoIE8oMSkgZXh0cmEgbWVtb3J5Lgo=' }
      ],
      code: [
        { code_id: 0, code_index: 0, name: 'code', data: 'Y2xhc3MgU29sdXRpb246CiAgICBkZWYgcmV2ZXJzZVN0cmluZyhzZWxmLCBzOiBMaXN0W3N0cl0pIC0+IE5vbmU6Cg==' },
      ],
      test: [
        { test_id: 0, test_index: 0, name: 'test 1', data: ['["h","e","l","l","o"]'] },
        { test_id: 1, test_index: 1, name: 'test 2', data: ['["H","a","n","n","a","h"]'] }
      ],
      solutions: [
        { solution_id: 0, solution_index: 0, name: 'Solution', func: 'reverseString', data: 'Y2xhc3MgU29sdXRpb246CiAgICBkZWYgcmV2ZXJzZVN0cmluZyhzZWxmLCBzKToKICAgICAgICBkZWYgaGVscGVyKGxlZnQsIHJpZ2h0KToKICAgICAgICAgICAgaWYgbGVmdCA8IHJpZ2h0OgogICAgICAgICAgICAgICAgc1tsZWZ0XSwgc1tyaWdodF0gPSBzW3JpZ2h0XSwgc1tsZWZ0XQogICAgICAgICAgICAgICAgaGVscGVyKGxlZnQgKyAxLCByaWdodCAtIDEpCgogICAgICAgIGhlbHBlcigwLCBsZW4ocykgLSAxKQo='}
      ]
    }
  },
  {
    problem_id: 1,
    problem_index: 1,
    content: {
      markdown: [
        { markdown_id: 0, markdown_index: 0, name: 'description', data: 'R2l2ZW4gYW4gaW50ZWdlciBhcnJheSBudW1zIHNvcnRlZCBpbiBub24tZGVjcmVhc2luZyBvcmRlciwgcmV0dXJuIGFuIGFycmF5IG9mIHRoZSBzcXVhcmVzIG9mIGVhY2ggbnVtYmVyIHNvcnRlZCBpbiBub24tZGVjcmVhc2luZyBvcmRlci4=' }
      ],
      code: [
        { code_id: 0, code_index: 0, name: 'code', data: 'Y2xhc3MgU29sdXRpb246CiAgICBkZWYgc29ydGVkU3F1YXJlcyhzZWxmLCBudW1zOiBMaXN0W2ludF0pIC0+IExpc3RbaW50XToK' }
      ],
      test: [
        { test_id: 0, test_index: 0, name: 'test 1', data: ['[-4,-1,0,3,10]'] },
        { test_id: 1, test_index: 1, name: 'test 2', data: ['[-7,-3,2,3,11]'] }
      ],
      solutions: [
        { solution_id: 0, solution_index: 0, name: 'Solution', func: 'sortedSquares', data: 'Y2xhc3MgU29sdXRpb246CiAgICBkZWYgc29ydGVkU3F1YXJlcyhzZWxmLCBudW1zOiBMaXN0W2ludF0pIC0+IExpc3RbaW50XToKICAgICAgICBuID0gbGVuKG51bXMpCiAgICAgICAgcmVzdWx0ID0gWzBdICogbgogICAgICAgIGxlZnQgPSAwCiAgICAgICAgcmlnaHQgPSBuIC0gMQogICAgICAgIGZvciBpIGluIHJhbmdlKG4gLSAxLCAtMSwgLTEpOgogICAgICAgICAgICBpZiBhYnMobnVtc1tsZWZ0XSkgPCBhYnMobnVtc1tyaWdodF0pOgogICAgICAgICAgICAgICAgc3F1YXJlID0gbnVtc1tyaWdodF0KICAgICAgICAgICAgICAgIHJpZ2h0IC09IDEKICAgICAgICAgICAgZWxzZToKICAgICAgICAgICAgICAgIHNxdWFyZSA9IG51bXNbbGVmdF0KICAgICAgICAgICAgICAgIGxlZnQgKz0gMQogICAgICAgICAgICByZXN1bHRbaV0gPSBzcXVhcmUgKiBzcXVhcmUKICAgICAgICByZXR1cm4gcmVzdWx0Cg=='}
      ]
    }
  },
  {
    problem_id: 2,
    problem_index: 1,
    content: {
      markdown: [
        { markdown_id: 0, markdown_index: 0, name: 'description', data: 'WW91IGFyZSBnaXZlbiBhbiBpbnRlZ2VyIGFycmF5IG51bXMgY29uc2lzdGluZyBvZiBuIGVsZW1lbnRzLCBhbmQgYW4gaW50ZWdlciBrLgoKRmluZCBhIGNvbnRpZ3VvdXMgc3ViYXJyYXkgd2hvc2UgbGVuZ3RoIGlzIGVxdWFsIHRvIGsgdGhhdCBoYXMgdGhlIG1heGltdW0gYXZlcmFnZSB2YWx1ZSBhbmQgcmV0dXJuIHRoaXMgdmFsdWUuIEFueSBhbnN3ZXIgd2l0aCBhIGNhbGN1bGF0aW9uIGVycm9yIGxlc3MgdGhhbiAxMF4tNSB3aWxsIGJlIGFjY2VwdGVkLgo=' }
      ],
      code: [
        { code_id: 0, code_index: 0, name: 'code', data: 'Y2xhc3MgU29sdXRpb246CiAgICBkZWYgZmluZE1heEF2ZXJhZ2Uoc2VsZiwgbnVtczogTGlzdFtpbnRdLCBrOiBpbnQpIC0+IGZsb2F0Ogo=' }
      ],
      test: [
        { test_id: 0, test_index: 0, name: 'test 1', data: ['[1,12,-5,-6,50,3],4'] },
        { test_id: 1, test_index: 1, name: 'test 2', data: ['[5],1'] }
      ],
      solutions: [
        { solution_id: 0, solution_index: 0, name: 'Solution', func: 'findMaxAverage', data: 'Y2xhc3MgU29sdXRpb246CiAgICBkZWYgZmluZE1heEF2ZXJhZ2Uoc2VsZiwgbnVtczogTGlzdFtpbnRdLCBrOiBpbnQpIC0+IGZsb2F0OgogICAgICAgIGJlc3QgPSBub3cgPSBzdW0obnVtc1s6a10pCiAgICAgICAgZm9yIGkgaW4gcmFuZ2UoayxsZW4obnVtcykpOgogICAgICAgICAgICBub3cgKz0gbnVtc1tpXSAtIG51bXNbaS1rXQogICAgICAgICAgICBpZiBub3c+YmVzdDoKICAgICAgICAgICAgICAgIGJlc3QgPSBub3cKICAgICAgICByZXR1cm4gYmVzdC9rCg=='}
      ]
    }
  },
  {
    problem_id: 3,
    problem_index: 1,
    content: {
      markdown: [
        { markdown_id: 0, markdown_index: 0, name: 'description', data: 'R2l2ZW4gYSBiaW5hcnkgYXJyYXkgbnVtcyBhbmQgYW4gaW50ZWdlciBrLCByZXR1cm4gdGhlIG1heGltdW0gbnVtYmVyIG9mIGNvbnNlY3V0aXZlIDEncyBpbiB0aGUgYXJyYXkgaWYgeW91IGNhbiBmbGlwIGF0IG1vc3QgayAwJ3MuCg==' }
      ],
      code: [
        { code_id: 0, code_index: 0, name: 'code', data: 'Y2xhc3MgU29sdXRpb246CiAgICBkZWYgbG9uZ2VzdE9uZXMoc2VsZiwgbnVtczogTGlzdFtpbnRdLCBrOiBpbnQpIC0+IGludDoK' }
      ],
      test: [
        { test_id: 0, test_index: 0, name: 'test 1', data: ['[1,1,1,0,0,0,1,1,1,1,0],2'] },
        { test_id: 1, test_index: 1, name: 'test 2', data: ['[0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1],3'] }
      ],
      solutions: [
        { solution_id: 0, solution_index: 0, name: 'Solution', func: 'longestOnes', data: 'Y2xhc3MgU29sdXRpb246CiAgICBkZWYgbG9uZ2VzdE9uZXMoc2VsZiwgbnVtczogTGlzdFtpbnRdLCBrOiBpbnQpIC0+IGludDoKICAgICAgICBsZWZ0ID0gMAogICAgICAgIGZvciByaWdodCBpbiByYW5nZShsZW4obnVtcykpOgogICAgICAgICAgICAjIElmIHdlIGluY2x1ZGVkIGEgemVybyBpbiB0aGUgd2luZG93IHdlIHJlZHVjZSB0aGUgdmFsdWUgb2Ygay4KICAgICAgICAgICAgIyBTaW5jZSBrIGlzIHRoZSBtYXhpbXVtIHplcm9zIGFsbG93ZWQgaW4gYSB3aW5kb3cuCiAgICAgICAgICAgIGsgLT0gMSAtIG51bXNbcmlnaHRdCiAgICAgICAgICAgICMgQSBuZWdhdGl2ZSBrIGRlbm90ZXMgd2UgaGF2ZSBjb25zdW1lZCBhbGwgYWxsb3dlZCBmbGlwcyBhbmQgd2luZG93IGhhcwogICAgICAgICAgICAjIG1vcmUgdGhhbiBhbGxvd2VkIHplcm9zLCB0aHVzIGluY3JlbWVudCBsZWZ0IHBvaW50ZXIgYnkgMSB0byBrZWVwIHRoZSB3aW5kb3cgc2l6ZSBzYW1lLgogICAgICAgICAgICBpZiBrIDwgMDoKICAgICAgICAgICAgICAgICMgSWYgdGhlIGxlZnQgZWxlbWVudCB0byBiZSB0aHJvd24gb3V0IGlzIHplcm8gd2UgaW5jcmVhc2Ugay4KICAgICAgICAgICAgICAgIGsgKz0gMSAtIG51bXNbbGVmdF0KICAgICAgICAgICAgICAgIGxlZnQgKz0gMQogICAgICAgIHJldHVybiByaWdodCAtIGxlZnQgKyAxCg=='}
      ]
    }
  },
  {
    problem_id: 4,
    problem_index: 1,
    content: {
      markdown: [
        { markdown_id: 0, markdown_index: 0, name: 'description', data: 'R2l2ZW4gYW4gYXJyYXkgbnVtcy4gV2UgZGVmaW5lIGEgcnVubmluZyBzdW0gb2YgYW4gYXJyYXkgYXMgcnVubmluZ1N1bVtpXSA9IHN1bShudW1zWzBd4oCmbnVtc1tpXSkuCgpSZXR1cm4gdGhlIHJ1bm5pbmcgc3VtIG9mIG51bXMuCg==' }
      ],
      code: [
        { code_id: 0, code_index: 0, name: 'code', data: 'Y2xhc3MgU29sdXRpb246CiAgICBkZWYgcnVubmluZ1N1bShzZWxmLCBudW1zOiBMaXN0W2ludF0pIC0+IExpc3RbaW50XToK' }
      ],
      test: [
        { test_id: 0, test_index: 0, name: 'test 1', data: ['[1,2,3,4]'] },
        { test_id: 1, test_index: 1, name: 'test 2', data: ['[1,1,1,1,1]'] },
        { test_id: 2, test_index: 2, name: 'Test 3', data: ['[3,1,2,10,1]'] }
      ],
      solutions: [
        { solution_id: 0, solution_index: 0, name: 'Solution', func: 'runningSum', data: 'Y2xhc3MgU29sdXRpb246CiAgICBkZWYgcnVubmluZ1N1bShzZWxmLCBudW1zOiBMaXN0W2ludF0pIC0+IExpc3RbaW50XToKICAgICAgICBmb3IgaSBpbiByYW5nZSgxLCBsZW4obnVtcykpOgogICAgICAgICAgICBudW1zW2ldICs9IG51bXNbaSAtIDFdCiAgICAgICAgcmV0dXJuIG51bXMK'}
      ]
    }
  },
  {
    problem_id: 5,
    problem_index: 1,
    content: {
      markdown: [
        { markdown_id: 0, markdown_index: 0, name: 'description', data: 'R2l2ZW4gYW4gYXJyYXkgb2YgaW50ZWdlcnMgbnVtcywgeW91IHN0YXJ0IHdpdGggYW4gaW5pdGlhbCBwb3NpdGl2ZSB2YWx1ZSBzdGFydFZhbHVlLgoKSW4gZWFjaCBpdGVyYXRpb24sIHlvdSBjYWxjdWxhdGUgdGhlIHN0ZXAgYnkgc3RlcCBzdW0gb2Ygc3RhcnRWYWx1ZSBwbHVzIGVsZW1lbnRzIGluIG51bXMgKGZyb20gbGVmdCB0byByaWdodCkuCgpSZXR1cm4gdGhlIG1pbmltdW0gcG9zaXRpdmUgdmFsdWUgb2Ygc3RhcnRWYWx1ZSBzdWNoIHRoYXQgdGhlIHN0ZXAgYnkgc3RlcCBzdW0gaXMgbmV2ZXIgbGVzcyB0aGFuIDEuCg==' }
      ],
      code: [
        { code_id: 0, code_index: 0, name: 'code', data: 'Y2xhc3MgU29sdXRpb246CiAgICBkZWYgbWluU3RhcnRWYWx1ZShzZWxmLCBudW1zOiBMaXN0W2ludF0pIC0+IGludDoK' }
      ],
      test: [
        { test_id: 0, test_index: 0, name: 'test 1', data: ['[-3,2,-3,4,2]'] },
        { test_id: 1, test_index: 1, name: 'test 2', data: ['[1,2]'] },
        { test_id: 2, test_index: 2, name: 'Test 3', data: ['[1,-2,-3]'] }
      ],
      solutions: [
        { solution_id: 0, solution_index: 0, name: 'Solution', func: 'minStartValue', data: 'Y2xhc3MgU29sdXRpb246CiAgICBkZWYgbWluU3RhcnRWYWx1ZShzZWxmLCBudW1zOiBMaXN0W2ludF0pIC0+IGludDoKICAgICAgICAjIFdlIHVzZSAidG90YWwiIGZvciBjdXJyZW50IHN0ZXAtYnktc3RlcCB0b3RhbCwgIm1pbl92YWwiIGZvciBtaW5pbXVtIAogICAgICAgICMgc3RlcC1ieS1zdGVwIHRvdGFsIGFtb25nIGFsbCBzdW1zLiBTaW5jZSB3ZSBhbHdheXMgc3RhcnQgd2l0aCAKICAgICAgICAjIHN0YXJ0VmFsdWUgPSAwLCB0aGVyZWZvcmUgdGhlIGluaXRpYWwgY3VycmVudCBzdGVwLWJ5LXN0ZXAgdG90YWwgaXMgMCwgCiAgICAgICAgIyB0aHVzIHdlIHNldCAidG90YWwiIGFuZCAibWluX3ZhbCIgYmUgMC4gCiAgICAgICAgbWluX3ZhbCA9IDAKICAgICAgICB0b3RhbCA9IDAKCiAgICAgICAgIyBJdGVyYXRlIG92ZXIgdGhlIGFycmF5IGFuZCBnZXQgdGhlIG1pbmltdW0gc3RlcC1ieS1zdGVwIHRvdGFsLgogICAgICAgIGZvciBudW0gaW4gbnVtczoKICAgICAgICAgICAgdG90YWwgKz0gbnVtCiAgICAgICAgICAgIG1pbl92YWwgPSBtaW4obWluX3ZhbCwgdG90YWwpCgogICAgICAgICMgV2UgaGF2ZSB0byBjaGFuZ2UgdGhlIG1pbmltdW0gc3RlcC1ieS1zdGVwIHRvdGFsIHRvIDEsIAogICAgICAgICMgYnkgaW5jcmVhc2luZyB0aGUgc3RhcnRWYWx1ZSBmcm9tIDAgdG8gLW1pbl92YWwgKyAxLCAKICAgICAgICAjIHdoaWNoIGlzIGp1c3QgdGhlIG1pbmltdW0gc3RhcnRWYWx1ZSB3ZSB3YW50LgogICAgICAgIHJldHVybiAtbWluX3ZhbCArIDEK'}
      ]
    }
  },
  {
    problem_id: 6,
    problem_index: 1,
    content: {
      markdown: [
        { markdown_id: 0, markdown_index: 0, name: 'description', data: 'WW91IGFyZSBnaXZlbiBhIDAtaW5kZXhlZCBhcnJheSBudW1zIG9mIG4gaW50ZWdlcnMsIGFuZCBhbiBpbnRlZ2VyIGsuCgpUaGUgay1yYWRpdXMgYXZlcmFnZSBmb3IgYSBzdWJhcnJheSBvZiBudW1zIGNlbnRlcmVkIGF0IHNvbWUgaW5kZXggaSB3aXRoIHRoZSByYWRpdXMgayBpcyB0aGUgYXZlcmFnZSBvZiBhbGwgZWxlbWVudHMgaW4gbnVtcyBiZXR3ZWVuIHRoZSBpbmRpY2VzIGkgLSBrIGFuZCBpICsgayAoaW5jbHVzaXZlKS4gSWYgdGhlcmUgYXJlIGxlc3MgdGhhbiBrIGVsZW1lbnRzIGJlZm9yZSBvciBhZnRlciB0aGUgaW5kZXggaSwgdGhlbiB0aGUgay1yYWRpdXMgYXZlcmFnZSBpcyAtMS4KCkJ1aWxkIGFuZCByZXR1cm4gYW4gYXJyYXkgYXZncyBvZiBsZW5ndGggbiB3aGVyZSBhdmdzW2ldIGlzIHRoZSBrLXJhZGl1cyBhdmVyYWdlIGZvciB0aGUgc3ViYXJyYXkgY2VudGVyZWQgYXQgaW5kZXggaS4KClRoZSBhdmVyYWdlIG9mIHggZWxlbWVudHMgaXMgdGhlIHN1bSBvZiB0aGUgeCBlbGVtZW50cyBkaXZpZGVkIGJ5IHgsIHVzaW5nIGludGVnZXIgZGl2aXNpb24uIFRoZSBpbnRlZ2VyIGRpdmlzaW9uIHRydW5jYXRlcyB0b3dhcmQgemVybywgd2hpY2ggbWVhbnMgbG9zaW5nIGl0cyBmcmFjdGlvbmFsIHBhcnQuCgpGb3IgZXhhbXBsZSwgdGhlIGF2ZXJhZ2Ugb2YgZm91ciBlbGVtZW50cyAyLCAzLCAxLCBhbmQgNSBpcyAoMiArIDMgKyAxICsgNSkgLyA0ID0gMTEgLyA0ID0gMi43NSwgd2hpY2ggdHJ1bmNhdGVzIHRvIDIuCg==' }
      ],
      code: [
        { code_id: 0, code_index: 0, name: 'code', data: 'Y2xhc3MgU29sdXRpb246CiAgICBkZWYgZ2V0QXZlcmFnZXMoc2VsZiwgbnVtczogTGlzdFtpbnRdLCBrOiBpbnQpIC0+IExpc3RbaW50XToK' }
      ],
      test: [
        { test_id: 0, test_index: 0, name: 'test 1', data: ['[7,4,3,9,1,8,5,2,6],3'] },
        { test_id: 1, test_index: 1, name: 'test 2', data: ['[100000],0'] },
        { test_id: 2, test_index: 2, name: 'Test 3', data: ['[8],100000'] }
      ],
      solutions: [
        { solution_id: 0, solution_index: 0, name: 'Solution', func: 'getAverages', data: 'Y2xhc3MgU29sdXRpb246CiAgICBkZWYgZ2V0QXZlcmFnZXMoc2VsZiwgbnVtczogTGlzdFtpbnRdLCBrOiBpbnQpIC0+IExpc3RbaW50XToKICAgICAgICAjIFdoZW4gYSBzaW5nbGUgZWxlbWVudCBpcyBjb25zaWRlcmVkIHRoZW4gaXRzIGF2ZXJhZ2Ugd2lsbCBiZSB0aGUgbnVtYmVyIGl0c2VsZiBvbmx5LgogICAgICAgIGlmIGsgPT0gMDoKICAgICAgICAgICAgcmV0dXJuIG51bXMKCiAgICAgICAgd2luZG93X3NpemUgPSAyICogayArIDEKICAgICAgICBuID0gbGVuKG51bXMpCiAgICAgICAgYXZlcmFnZXMgPSBbLTFdICogbgoKICAgICAgICAjIEFueSBpbmRleCB3aWxsIG5vdCBoYXZlICdrJyBlbGVtZW50cyBpbiBpdCdzIGxlZnQgYW5kIHJpZ2h0LgogICAgICAgIGlmIHdpbmRvd19zaXplID4gbjoKICAgICAgICAgICAgcmV0dXJuIGF2ZXJhZ2VzCgogICAgICAgICMgR2VuZXJhdGUgJ3ByZWZpeCcgYXJyYXkgZm9yICdudW1zJy4KICAgICAgICAjICdwcmVmaXhbaSArIDFdJyB3aWxsIGJlIHN1bSBvZiBhbGwgZWxlbWVudHMgb2YgJ251bXMnIGZyb20gaW5kZXggJzAnIHRvICdpJy4KICAgICAgICBwcmVmaXggPSBbMF0gKiAobiArIDEpCiAgICAgICAgZm9yIGkgaW4gcmFuZ2Uobik6CiAgICAgICAgICAgIHByZWZpeFtpICsgMV0gPSBwcmVmaXhbaV0gKyBudW1zW2ldCgogICAgICAgICMgV2UgaXRlcmF0ZSBvbmx5IG9uIHRob3NlIGluZGljZXMgd2hpY2ggaGF2ZSBhdGxlYXN0ICdrJyBlbGVtZW50cyBpbiB0aGVpciBsZWZ0IGFuZCByaWdodC4KICAgICAgICAjIGkuZS4gaW5kaWNlcyBmcm9tICdrJyB0byAnbiAtIGsnCiAgICAgICAgZm9yIGkgaW4gcmFuZ2UoaywgbiAtIGspOgogICAgICAgICAgICBsZWZ0Qm91bmQsIHJpZ2h0Qm91bmQgPSBpIC0gaywgaSArIGsKICAgICAgICAgICAgc3ViQXJyYXlTdW0gPSBwcmVmaXhbcmlnaHRCb3VuZCArIDFdIC0gcHJlZml4W2xlZnRCb3VuZF0KICAgICAgICAgICAgYXZlcmFnZSA9IHN1YkFycmF5U3VtIC8vIHdpbmRvd19zaXplCiAgICAgICAgICAgIGF2ZXJhZ2VzW2ldID0gYXZlcmFnZQoKICAgICAgICByZXR1cm4gYXZlcmFnZXMK'}
      ]
    }
  },
  {
    problem_id: 7,
    problem_index: 1,
    content: {
      markdown: [
        { markdown_id: 0, markdown_index: 0, name: 'description', data: 'QSBwYW5ncmFtIGlzIGEgc2VudGVuY2Ugd2hlcmUgZXZlcnkgbGV0dGVyIG9mIHRoZSBFbmdsaXNoIGFscGhhYmV0IGFwcGVhcnMgYXQgbGVhc3Qgb25jZS4KCkdpdmVuIGEgc3RyaW5nIHNlbnRlbmNlIGNvbnRhaW5pbmcgb25seSBsb3dlcmNhc2UgRW5nbGlzaCBsZXR0ZXJzLCByZXR1cm4gdHJ1ZSBpZiBzZW50ZW5jZSBpcyBhIHBhbmdyYW0sIG9yIGZhbHNlIG90aGVyd2lzZS4K' }
      ],
      code: [
        { code_id: 0, code_index: 0, name: 'code', data: 'Y2xhc3MgU29sdXRpb246CiAgICBkZWYgY2hlY2tJZlBhbmdyYW0oc2VsZiwgc2VudGVuY2U6IHN0cikgLT4gYm9vbDoK' }
      ],
      test: [
        { test_id: 0, test_index: 0, name: 'test 1', data: ['thequickbrownfoxjumpsoverthelazydog'] },
        { test_id: 1, test_index: 1, name: 'test 2', data: ['leetcode'] }
      ],
      solutions: [
        { solution_id: 0, solution_index: 0, name: 'Solution', func: 'checkIfPangram', data: 'Y2xhc3MgU29sdXRpb246CiAgICBkZWYgY2hlY2tJZlBhbmdyYW0oc2VsZiwgc2VudGVuY2U6IHN0cikgLT4gYm9vbDoKICAgICAgICAjIEFkZCBldmVyeSBsZXR0ZXIgb2YgJ3NlbnRlbmNlJyB0byBoYXNoIHNldCAnc2VlbicuCiAgICAgICAgc2VlbiA9IHNldChzZW50ZW5jZSkKICAgICAgICAKICAgICAgICAjIElmIHRoZSBzaXplIG9mICdzZWVuJyBpcyAyNiwgdGhlbiAnc2VudGVuY2UnIGlzIGEgcGFuZ3JhbS4KICAgICAgICByZXR1cm4gbGVuKHNlZW4pID09IDI2Cg==+IExpc3RbaW50XToKICAgICAgICAjIFdoZW4gYSBzaW5nbGUgZWxlbWVudCBpcyBjb25zaWRlcmVkIHRoZW4gaXRzIGF2ZXJhZ2Ugd2lsbCBiZSB0aGUgbnVtYmVyIGl0c2VsZiBvbmx5LgogICAgICAgIGlmIGsgPT0gMDoKICAgICAgICAgICAgcmV0dXJuIG51bXMKCiAgICAgICAgd2luZG93X3NpemUgPSAyICogayArIDEKICAgICAgICBuID0gbGVuKG51bXMpCiAgICAgICAgYXZlcmFnZXMgPSBbLTFdICogbgoKICAgICAgICAjIEFueSBpbmRleCB3aWxsIG5vdCBoYXZlICdrJyBlbGVtZW50cyBpbiBpdCdzIGxlZnQgYW5kIHJpZ2h0LgogICAgICAgIGlmIHdpbmRvd19zaXplID4gbjoKICAgICAgICAgICAgcmV0dXJuIGF2ZXJhZ2VzCgogICAgICAgICMgR2VuZXJhdGUgJ3ByZWZpeCcgYXJyYXkgZm9yICdudW1zJy4KICAgICAgICAjICdwcmVmaXhbaSArIDFdJyB3aWxsIGJlIHN1bSBvZiBhbGwgZWxlbWVudHMgb2YgJ251bXMnIGZyb20gaW5kZXggJzAnIHRvICdpJy4KICAgICAgICBwcmVmaXggPSBbMF0gKiAobiArIDEpCiAgICAgICAgZm9yIGkgaW4gcmFuZ2Uobik6CiAgICAgICAgICAgIHByZWZpeFtpICsgMV0gPSBwcmVmaXhbaV0gKyBudW1zW2ldCgogICAgICAgICMgV2UgaXRlcmF0ZSBvbmx5IG9uIHRob3NlIGluZGljZXMgd2hpY2ggaGF2ZSBhdGxlYXN0ICdrJyBlbGVtZW50cyBpbiB0aGVpciBsZWZ0IGFuZCByaWdodC4KICAgICAgICAjIGkuZS4gaW5kaWNlcyBmcm9tICdrJyB0byAnbiAtIGsnCiAgICAgICAgZm9yIGkgaW4gcmFuZ2UoaywgbiAtIGspOgogICAgICAgICAgICBsZWZ0Qm91bmQsIHJpZ2h0Qm91bmQgPSBpIC0gaywgaSArIGsKICAgICAgICAgICAgc3ViQXJyYXlTdW0gPSBwcmVmaXhbcmlnaHRCb3VuZCArIDFdIC0gcHJlZml4W2xlZnRCb3VuZF0KICAgICAgICAgICAgYXZlcmFnZSA9IHN1YkFycmF5U3VtIC8vIHdpbmRvd19zaXplCiAgICAgICAgICAgIGF2ZXJhZ2VzW2ldID0gYXZlcmFnZQoKICAgICAgICByZXR1cm4gYXZlcmFnZXMK'}
      ]
    }
  },
  {
    problem_id: 8,
    problem_index: 1,
    content: {
      markdown: [
        { markdown_id: 0, markdown_index: 0, name: 'description', data: 'R2l2ZW4gYW4gYXJyYXkgbnVtcyBjb250YWluaW5nIG4gZGlzdGluY3QgbnVtYmVycyBpbiB0aGUgcmFuZ2UgWzAsIG5dLCByZXR1cm4gdGhlIG9ubHkgbnVtYmVyIGluIHRoZSByYW5nZSB0aGF0IGlzIG1pc3NpbmcgZnJvbSB0aGUgYXJyYXkuCg==' }
      ],
      code: [
        { code_id: 0, code_index: 0, name: 'code', data: 'Y2xhc3MgU29sdXRpb246CiAgICBkZWYgbWlzc2luZ051bWJlcihzZWxmLCBudW1zOiBMaXN0W2ludF0pIC0+IGludDoK' }
      ],
      test: [
        { test_id: 0, test_index: 0, name: 'test 1', data: ['[3,0,1]'] },
        { test_id: 1, test_index: 1, name: 'test 2', data: ['[0,1]'] },
        { test_id: 2, test_index: 2, name: 'Test 3', data: ['[9,6,4,2,3,5,7,0,1]'] },
      ],
      solutions: [
        { solution_id: 0, solution_index: 0, name: 'Solution', func: 'missingNumber', data: 'Y2xhc3MgU29sdXRpb246CiAgICBkZWYgbWlzc2luZ051bWJlcihzZWxmLCBudW1zKToKICAgICAgICBudW1fc2V0ID0gc2V0KG51bXMpCiAgICAgICAgbiA9IGxlbihudW1zKSArIDEKICAgICAgICBmb3IgbnVtYmVyIGluIHJhbmdlKG4pOgogICAgICAgICAgICBpZiBudW1iZXIgbm90IGluIG51bV9zZXQ6CiAgICAgICAgICAgICAgICByZXR1cm4gbnVtYmVyCg=='}
      ]
    }
  },
  {
    problem_id: 9,
    problem_index: 1,
    content: {
      markdown: [
        { markdown_id: 0, markdown_index: 0, name: 'description', data: 'R2l2ZW4gYW4gaW50ZWdlciBhcnJheSBhcnIsIGNvdW50IGhvdyBtYW55IGVsZW1lbnRzIHggdGhlcmUgYXJlLCBzdWNoIHRoYXQgeCArIDEgaXMgYWxzbyBpbiBhcnIuIElmIHRoZXJlIGFyZSBkdXBsaWNhdGVzIGluIGFyciwgY291bnQgdGhlbSBzZXBhcmF0ZWx5Lgo=' }
      ],
      code: [
        { code_id: 0, code_index: 0, name: 'code', data: 'Y2xhc3MgU29sdXRpb246CiAgICBkZWYgY291bnRFbGVtZW50cyhzZWxmLCBhcnI6IExpc3RbaW50XSkgLT4gaW50Ogo=' }
      ],
      test: [
        { test_id: 0, test_index: 0, name: 'test 1', data: ['[1,2,3]'] },
        { test_id: 1, test_index: 1, name: 'test 2', data: ['[1,1,3,3,5,5,7,7]'] }
      ],
      solutions: [
        { solution_id: 0, solution_index: 0, name: 'Solution', func: 'countElements', data: 'Y2xhc3MgU29sdXRpb246CiAgICBkZWYgY291bnRFbGVtZW50cyhzZWxmLCBhcnI6IExpc3RbaW50XSkgLT4gaW50OgogICAgaGFzaF9zZXQgPSBzZXQoYXJyKQogICAgY291bnQgPSAwCiAgICBmb3IgeCBpbiBhcnI6CiAgICAgICAgaWYgeCArIDEgaW4gaGFzaF9zZXQ6CiAgICAgICAgICAgIGNvdW50ICs9IDEKICAgIHJldHVybiBjb3VudAo='}
      ]
    }
  },
  {
    problem_id: 10,
    problem_index: 1,
    content: {
      markdown: [
        { markdown_id: 0, markdown_index: 0, name: 'description', data: 'WW91IGFyZSBnaXZlbiBhbiBpbnRlZ2VyIGFycmF5IG1hdGNoZXMgd2hlcmUgbWF0Y2hlc1tpXSA9IFt3aW5uZXJpLCBsb3NlcmldIGluZGljYXRlcyB0aGF0IHRoZSBwbGF5ZXIgd2lubmVyaSBkZWZlYXRlZCBwbGF5ZXIgbG9zZXJpIGluIGEgbWF0Y2guCgpSZXR1cm4gYSBsaXN0IGFuc3dlciBvZiBzaXplIDIgd2hlcmU6CgphbnN3ZXJbMF0gaXMgYSBsaXN0IG9mIGFsbCBwbGF5ZXJzIHRoYXQgaGF2ZSBub3QgbG9zdCBhbnkgbWF0Y2hlcy4KYW5zd2VyWzFdIGlzIGEgbGlzdCBvZiBhbGwgcGxheWVycyB0aGF0IGhhdmUgbG9zdCBleGFjdGx5IG9uZSBtYXRjaC4KVGhlIHZhbHVlcyBpbiB0aGUgdHdvIGxpc3RzIHNob3VsZCBiZSByZXR1cm5lZCBpbiBpbmNyZWFzaW5nIG9yZGVyLgoKTm90ZToKCllvdSBzaG91bGQgb25seSBjb25zaWRlciB0aGUgcGxheWVycyB0aGF0IGhhdmUgcGxheWVkIGF0IGxlYXN0IG9uZSBtYXRjaC4KVGhlIHRlc3RjYXNlcyB3aWxsIGJlIGdlbmVyYXRlZCBzdWNoIHRoYXQgbm8gdHdvIG1hdGNoZXMgd2lsbCBoYXZlIHRoZSBzYW1lIG91dGNvbWUuCg==' }
      ],
      code: [
        { code_id: 0, code_index: 0, name: 'Snipper', data: 'Y2xhc3MgU29sdXRpb246CiAgICBkZWYgZmluZFdpbm5lcnMoc2VsZiwgbWF0Y2hlczogTGlzdFtMaXN0W2ludF1dKSAtPiBMaXN0W0xpc3RbaW50XV06Cg==' }
      ],
      test: [
        { test_id: 0, test_index: 0, name: 'test 1', data: ['[[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]'] },
        { test_id: 1, test_index: 1, name: 'test 2', data: ['[[2,3],[1,3],[5,4],[6,4]]'] }
      ],
      solutions: [
        { solution_id: 0, solution_index: 0, name: 'Solution', func: 'findWinners', data: 'Y2xhc3MgU29sdXRpb246CiAgICBkZWYgZmluZFdpbm5lcnMoc2VsZiwgbWF0Y2hlczogTGlzdFtMaXN0W2ludF1dKSAtPiBMaXN0W0xpc3RbaW50XV06CiAgICAgICAgbG9zc2VzX2NvdW50ID0gWy0xXSAqIDEwMDAwMQoKICAgICAgICBmb3Igd2lubmVyLCBsb3NlciBpbiBtYXRjaGVzOgogICAgICAgICAgICBpZiBsb3NzZXNfY291bnRbd2lubmVyXSA9PSAtMToKICAgICAgICAgICAgICAgIGxvc3Nlc19jb3VudFt3aW5uZXJdID0gMAogICAgICAgICAgICBpZiBsb3NzZXNfY291bnRbbG9zZXJdID09IC0xOgogICAgICAgICAgICAgICAgbG9zc2VzX2NvdW50W2xvc2VyXSA9IDEKICAgICAgICAgICAgZWxzZToKICAgICAgICAgICAgICAgIGxvc3Nlc19jb3VudFtsb3Nlcl0gKz0gMQogICAgICAgICAgICAKICAgICAgICBhbnN3ZXIgPSBbW10sIFtdXQogICAgICAgIGZvciBpIGluIHJhbmdlKDEwMDAwMSk6CiAgICAgICAgICAgIGlmIGxvc3Nlc19jb3VudFtpXSA9PSAwOgogICAgICAgICAgICAgICAgYW5zd2VyWzBdLmFwcGVuZChpKQogICAgICAgICAgICBlbGlmIGxvc3Nlc19jb3VudFtpXSA9PSAxOgogICAgICAgICAgICAgICAgYW5zd2VyWzFdLmFwcGVuZChpKQogICAgICAgICAgICAgICAgCiAgICAgICAgcmV0dXJuIGFuc3dlcgo='}
      ]
    }
  },
  {
    problem_id: 11,
    problem_index: 1,
    content: {
      markdown: [
        { markdown_id: 0, markdown_index: 0, name: 'description', data: 'R2l2ZW4gYW4gaW50ZWdlciBhcnJheSBudW1zLCByZXR1cm4gdGhlIGxhcmdlc3QgaW50ZWdlciB0aGF0IG9ubHkgb2NjdXJzIG9uY2UuIElmIG5vIGludGVnZXIgb2NjdXJzIG9uY2UsIHJldHVybiAtMS4K' }
      ],
      code: [
        { code_id: 0, code_index: 0, name: 'code', data: 'Y2xhc3MgU29sdXRpb246CiAgICBkZWYgbGFyZ2VzdFVuaXF1ZU51bWJlcihzZWxmLCBudW1zOiBMaXN0W2ludF0pIC0+IGludDoK' }
      ],
      test: [
        { test_id: 0, test_index: 0, name: 'test 1', data: ['[5,7,3,9,4,9,8,3,1]'] },
        { test_id: 1, test_index: 1, name: 'test 2', data: ['[9,9,8,8]'] }
      ],
      solutions: [
        { solution_id: 0, solution_index: 0, name: 'Solution', func: 'largestUniqueNumber', data: 'Y2xhc3MgU29sdXRpb246CiAgICBkZWYgbGFyZ2VzdFVuaXF1ZU51bWJlcihzZWxmLCBudW1zOiBMaXN0W2ludF0pIC0+IGludDoKICAgICAgICAjIFVzZSBDb3VudGVyIHRvIGNvdW50IGZyZXF1ZW5jaWVzIG9mIG51bWJlcnMKICAgICAgICBmcmVxdWVuY3lfbWFwID0gQ291bnRlcihudW1zKQoKICAgICAgICAjIEZpbmQgdGhlIGxhcmdlc3QgbnVtYmVyIHdpdGggZnJlcXVlbmN5IDEsIG9yIC0xIGlmIG5vbmUgZm91bmQKICAgICAgICByZXR1cm4gbWF4KAogICAgICAgICAgICAobnVtIGZvciBudW0sIGZyZXEgaW4gZnJlcXVlbmN5X21hcC5pdGVtcygpIGlmIGZyZXEgPT0gMSksCiAgICAgICAgICAgIGRlZmF1bHQ9LTEsCiAgICAgICAgKQo='}
      ]
    }
  },
  {
    problem_id: 12,
    problem_index: 1,
    content: {
      markdown: [
        { markdown_id: 0, markdown_index: 0, name: 'description', data: 'R2l2ZW4gYSBzdHJpbmcgdGV4dCwgeW91IHdhbnQgdG8gdXNlIHRoZSBjaGFyYWN0ZXJzIG9mIHRleHQgdG8gZm9ybSBhcyBtYW55IGluc3RhbmNlcyBvZiB0aGUgd29yZCAiYmFsbG9vbiIgYXMgcG9zc2libGUuCgpZb3UgY2FuIHVzZSBlYWNoIGNoYXJhY3RlciBpbiB0ZXh0IGF0IG1vc3Qgb25jZS4gUmV0dXJuIHRoZSBtYXhpbXVtIG51bWJlciBvZiBpbnN0YW5jZXMgdGhhdCBjYW4gYmUgZm9ybWVkLgo=' }
      ],
      code: [
        { code_id: 0, code_index: 0, name: 'code', data: 'Y2xhc3MgU29sdXRpb246CiAgICBkZWYgbWF4TnVtYmVyT2ZCYWxsb29ucyhzZWxmLCB0ZXh0OiBzdHIpIC0+IGludDoK' }
      ],
      test: [
        { test_id: 0, test_index: 0, name: 'test 1', data: ['nlaebolko'] },
        { test_id: 1, test_index: 1, name: 'test 2', data: ['loonbalxballpoon'] },
        { test_id: 2, test_index: 2, name: 'Test 3', data: ['leetcode'] }
      ],
      solutions: [
        { solution_id: 0, solution_index: 0, name: 'Solution', func: 'maxNumberOfBalloons', data: 'Y2xhc3MgU29sdXRpb246CiAgICBkZWYgbWF4TnVtYmVyT2ZCYWxsb29ucyhzZWxmLCB0ZXh0OiBzdHIpIC0+IGludDoKICAgICAgICB3b3JkID0gImJhbGxvb24iCiAgICAgICAgY2hhcnMgPSBkZWZhdWx0ZGljdChpbnQpCiAgICAgICAgYmFsbG9vbiA9IGRlZmF1bHRkaWN0KGludCkKCiAgICAgICAgZm9yIGMgaW4gd29yZDoKICAgICAgICAgICAgYmFsbG9vbltjXSArPSAxCgogICAgICAgIGZvciBjIGluIHRleHQ6CiAgICAgICAgICAgIGlmIGMgaW4gYmFsbG9vbjoKICAgICAgICAgICAgICAgIGNoYXJzW2NdICs9IDEKCiAgICAgICAgZm9yIGMgaW4gY2hhcnM6CiAgICAgICAgICAgIGNoYXJzW2NdID0gaW50KGNoYXJzW2NdL2JhbGxvb25bY10pCiAgICAgICAgICAgIAogICAgICAgIGlmIGxlbihjaGFycykgPT0gNToKICAgICAgICAgICAgcmV0dXJuIG1pbihjaGFycy52YWx1ZXMoKSkKICAgICAgICBlbHNlOgogICAgICAgICAgICByZXR1cm4gMAo='}
      ]
    }
  },
  {
    problem_id: 13,
    problem_index: 1,
    content: {
      markdown: [
        { markdown_id: 0, markdown_index: 0, name: 'description', data: 'R2l2ZW4gdGhlIGhlYWQgb2YgYSBzaW5nbHkgbGlua2VkIGxpc3QsIHJldHVybiB0aGUgbWlkZGxlIG5vZGUgb2YgdGhlIGxpbmtlZCBsaXN0LgoKSWYgdGhlcmUgYXJlIHR3byBtaWRkbGUgbm9kZXMsIHJldHVybiB0aGUgc2Vjb25kIG1pZGRsZSBub2RlLgo=' }
      ],
      code: [
        { code_id: 0, code_index: 0, name: 'code', data: 'IyBEZWZpbml0aW9uIGZvciBzaW5nbHktbGlua2VkIGxpc3QuCiMgY2xhc3MgTGlzdE5vZGU6CiMgICAgIGRlZiBfX2luaXRfXyhzZWxmLCB2YWw9MCwgbmV4dD1Ob25lKToKIyAgICAgICAgIHNlbGYudmFsID0gdmFsCiMgICAgICAgICBzZWxmLm5leHQgPSBuZXh0CmNsYXNzIFNvbHV0aW9uOgogICAgZGVmIG1pZGRsZU5vZGUoc2VsZiwgaGVhZDogT3B0aW9uYWxbTGlzdE5vZGVdKSAtPiBPcHRpb25hbFtMaXN0Tm9kZV06Cg==' }
      ],
      test: [
        { test_id: 0, test_index: 0, name: 'test 1', data: ['[1,2,3,4,5]'] },
        { test_id: 1, test_index: 1, name: 'test 2', data: ['[1,2,3,4,5,6]'] }
      ],
      solutions: [
        { solution_id: 0, solution_index: 0, name: 'Solution', func: 'middleNode', data: 'Y2xhc3MgU29sdXRpb246CiAgICBkZWYgbWlkZGxlTm9kZShzZWxmLCBoZWFkKToKICAgICAgICBzbG93ID0gZmFzdCA9IGhlYWQKICAgICAgICB3aGlsZSBmYXN0IGFuZCBmYXN0Lm5leHQ6CiAgICAgICAgICAgIHNsb3cgPSBzbG93Lm5leHQKICAgICAgICAgICAgZmFzdCA9IGZhc3QubmV4dC5uZXh0CiAgICAgICAgcmV0dXJuIHNsb3cK'}
      ]
    }
  },
  {
    problem_id: 14,
    problem_index: 1,
    content: {
      markdown: [
        { markdown_id: 0, markdown_index: 0, name: 'description', data: 'R2l2ZW4gdGhlIGhlYWQgb2YgYSBzb3J0ZWQgbGlua2VkIGxpc3QsIGRlbGV0ZSBhbGwgZHVwbGljYXRlcyBzdWNoIHRoYXQgZWFjaCBlbGVtZW50IGFwcGVhcnMgb25seSBvbmNlLiBSZXR1cm4gdGhlIGxpbmtlZCBsaXN0IHNvcnRlZCBhcyB3ZWxsLgo=' }
      ],
      code: [
        { code_id: 0, code_index: 0, name: 'code', data: 'IyBEZWZpbml0aW9uIGZvciBzaW5nbHktbGlua2VkIGxpc3QuCiMgY2xhc3MgTGlzdE5vZGU6CiMgICAgIGRlZiBfX2luaXRfXyhzZWxmLCB2YWw9MCwgbmV4dD1Ob25lKToKIyAgICAgICAgIHNlbGYudmFsID0gdmFsCiMgICAgICAgICBzZWxmLm5leHQgPSBuZXh0CmNsYXNzIFNvbHV0aW9uOgogICAgZGVmIGRlbGV0ZUR1cGxpY2F0ZXMoc2VsZiwgaGVhZDogT3B0aW9uYWxbTGlzdE5vZGVdKSAtPiBPcHRpb25hbFtMaXN0Tm9kZV06Cg==' }
      ],
      test: [
        { test_id: 0, test_index: 0, name: 'test 1', data: ['[1,1,2]'] },
        { test_id: 1, test_index: 1, name: 'test 2', data: ['[1,1,2,3,3]'] }
      ],
      solutions: [
        { solution_id: 0, solution_index: 0, name: 'Solution', func: 'deleteDuplicates', data: 'Y2xhc3MgU29sdXRpb246CiAgICBkZWYgZGVsZXRlRHVwbGljYXRlcyhzZWxmLCBoZWFkOiBMaXN0Tm9kZSkgLT4gTGlzdE5vZGU6CiAgICAgICAgY3VycmVudCA9IGhlYWQKICAgICAgICB3aGlsZSBjdXJyZW50IGlzIG5vdCBOb25lIGFuZCBjdXJyZW50Lm5leHQgaXMgbm90IE5vbmU6CiAgICAgICAgICAgIGlmIGN1cnJlbnQubmV4dC52YWwgPT0gY3VycmVudC52YWw6CiAgICAgICAgICAgICAgICBjdXJyZW50Lm5leHQgPSBjdXJyZW50Lm5leHQubmV4dAogICAgICAgICAgICBlbHNlOgogICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dAogICAgICAgIHJldHVybiBoZWFkCg=='}
      ]
    }
  },
  {
    problem_id: 15,
    problem_index: 1,
    content: {
      markdown: [
        { markdown_id: 0, markdown_index: 0, name: 'description', data: 'R2l2ZW4gdGhlIGhlYWQgb2YgYSBzaW5nbHkgbGlua2VkIGxpc3QgYW5kIHR3byBpbnRlZ2VycyBsZWZ0IGFuZCByaWdodCB3aGVyZSBsZWZ0IDw9IHJpZ2h0LCByZXZlcnNlIHRoZSBub2RlcyBvZiB0aGUgbGlzdCBmcm9tIHBvc2l0aW9uIGxlZnQgdG8gcG9zaXRpb24gcmlnaHQsIGFuZCByZXR1cm4gdGhlIHJldmVyc2VkIGxpc3QuCg==' }
      ],
      code: [
        { code_id: 0, code_index: 0, name: 'code', data: 'IyBEZWZpbml0aW9uIGZvciBzaW5nbHktbGlua2VkIGxpc3QuCiMgY2xhc3MgTGlzdE5vZGU6CiMgICAgIGRlZiBfX2luaXRfXyhzZWxmLCB2YWw9MCwgbmV4dD1Ob25lKToKIyAgICAgICAgIHNlbGYudmFsID0gdmFsCiMgICAgICAgICBzZWxmLm5leHQgPSBuZXh0CmNsYXNzIFNvbHV0aW9uOgogICAgZGVmIHJldmVyc2VCZXR3ZWVuKHNlbGYsIGhlYWQ6IE9wdGlvbmFsW0xpc3ROb2RlXSwgbGVmdDogaW50LCByaWdodDogaW50KSAtPiBPcHRpb25hbFtMaXN0Tm9kZV06Cg== ' }
      ],
      test: [
        { test_id: 0, test_index: 0, name: 'test 1', data: ['[1,2,3,4,5],2,4'] },
        { test_id: 1, test_index: 1, name: 'test 2', data: ['[5],1,1'] }
      ],
      solutions: [
        { solution_id: 0, solution_index: 0, name: 'Solution', func: 'reverseBetween', data: 'Y2xhc3MgU29sdXRpb246CiAgICBkZWYgcmV2ZXJzZUJldHdlZW4oCiAgICAgICAgc2VsZiwgaGVhZDogT3B0aW9uYWxbTGlzdE5vZGVdLCBtOiBpbnQsIG46IGludAogICAgKSAtPiBPcHRpb25hbFtMaXN0Tm9kZV06CiAgICAgICAgIyBFbXB0eSBsaXN0CiAgICAgICAgaWYgbm90IGhlYWQ6CiAgICAgICAgICAgIHJldHVybiBOb25lCgogICAgICAgICMgTW92ZSB0aGUgdHdvIHBvaW50ZXJzIHVudGlsIHRoZXkgcmVhY2ggdGhlIHByb3BlciBzdGFydGluZyBwb2ludAogICAgICAgICMgaW4gdGhlIGxpc3QuCiAgICAgICAgY3VyLCBwcmV2ID0gaGVhZCwgTm9uZQogICAgICAgIHdoaWxlIG0gPiAxOgogICAgICAgICAgICBwcmV2ID0gY3VyCiAgICAgICAgICAgIGN1ciA9IGN1ci5uZXh0CiAgICAgICAgICAgIG0sIG4gPSBtIC0gMSwgbiAtIDEKCiAgICAgICAgIyBUaGUgdHdvIHBvaW50ZXJzIHRoYXQgd2lsbCBmaXggdGhlIGZpbmFsIGNvbm5lY3Rpb25zLgogICAgICAgIHRhaWwsIGNvbiA9IGN1ciwgcHJldgoKICAgICAgICAjIEl0ZXJhdGl2ZWx5IHJldmVyc2UgdGhlIG5vZGVzIHVudGlsIG4gYmVjb21lcyAwLgogICAgICAgIHdoaWxlIG46CiAgICAgICAgICAgIHRoaXJkID0gY3VyLm5leHQKICAgICAgICAgICAgY3VyLm5leHQgPSBwcmV2CiAgICAgICAgICAgIHByZXYgPSBjdXIKICAgICAgICAgICAgY3VyID0gdGhpcmQKICAgICAgICAgICAgbiAtPSAxCgogICAgICAgICMgQWRqdXN0IHRoZSBmaW5hbCBjb25uZWN0aW9ucyBhcyBleHBsYWluZWQgaW4gdGhlIGFsZ29yaXRobQogICAgICAgIGlmIGNvbjoKICAgICAgICAgICAgY29uLm5leHQgPSBwcmV2CiAgICAgICAgZWxzZToKICAgICAgICAgICAgaGVhZCA9IHByZXYKICAgICAgICB0YWlsLm5leHQgPSBjdXIKICAgICAgICByZXR1cm4gaGVhZAo='}
      ]
    }
  },
  {
    problem_id: 16,
    problem_index: 1,
    content: {
      markdown: [
        { markdown_id: 0, markdown_index: 0, name: 'description', data: 'WW91IGFyZSBnaXZlbiBhbiBhYnNvbHV0ZSBwYXRoIGZvciBhIFVuaXgtc3R5bGUgZmlsZSBzeXN0ZW0sIHdoaWNoIGFsd2F5cyBiZWdpbnMgd2l0aCBhIHNsYXNoICcvJy4gWW91ciB0YXNrIGlzIHRvIHRyYW5zZm9ybSB0aGlzIGFic29sdXRlIHBhdGggaW50byBpdHMgc2ltcGxpZmllZCBjYW5vbmljYWwgcGF0aC4KClRoZSBydWxlcyBvZiBhIFVuaXgtc3R5bGUgZmlsZSBzeXN0ZW0gYXJlIGFzIGZvbGxvd3M6CgpBIHNpbmdsZSBwZXJpb2QgJy4nIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgZGlyZWN0b3J5LgpBIGRvdWJsZSBwZXJpb2QgJy4uJyByZXByZXNlbnRzIHRoZSBwcmV2aW91cy9wYXJlbnQgZGlyZWN0b3J5LgpNdWx0aXBsZSBjb25zZWN1dGl2ZSBzbGFzaGVzIHN1Y2ggYXMgJy8vJyBhbmQgJy8vLycgYXJlIHRyZWF0ZWQgYXMgYSBzaW5nbGUgc2xhc2ggJy8nLgpBbnkgc2VxdWVuY2Ugb2YgcGVyaW9kcyB0aGF0IGRvZXMgbm90IG1hdGNoIHRoZSBydWxlcyBhYm92ZSBzaG91bGQgYmUgdHJlYXRlZCBhcyBhIHZhbGlkIGRpcmVjdG9yeSBvciBmaWxlIG5hbWUuIEZvciBleGFtcGxlLCAnLi4uJyBhbmQgJy4uLi4nIGFyZSB2YWxpZCBkaXJlY3Rvcnkgb3IgZmlsZSBuYW1lcy4KVGhlIHNpbXBsaWZpZWQgY2Fub25pY2FsIHBhdGggc2hvdWxkIGZvbGxvdyB0aGVzZSBydWxlczoKClRoZSBwYXRoIG11c3Qgc3RhcnQgd2l0aCBhIHNpbmdsZSBzbGFzaCAnLycuCkRpcmVjdG9yaWVzIHdpdGhpbiB0aGUgcGF0aCBtdXN0IGJlIHNlcGFyYXRlZCBieSBleGFjdGx5IG9uZSBzbGFzaCAnLycuClRoZSBwYXRoIG11c3Qgbm90IGVuZCB3aXRoIGEgc2xhc2ggJy8nLCB1bmxlc3MgaXQgaXMgdGhlIHJvb3QgZGlyZWN0b3J5LgpUaGUgcGF0aCBtdXN0IG5vdCBoYXZlIGFueSBzaW5nbGUgb3IgZG91YmxlIHBlcmlvZHMgKCcuJyBhbmQgJy4uJykgdXNlZCB0byBkZW5vdGUgY3VycmVudCBvciBwYXJlbnQgZGlyZWN0b3JpZXMuClJldHVybiB0aGUgc2ltcGxpZmllZCBjYW5vbmljYWwgcGF0aC4K' }
      ],
      code: [
        { code_id: 0, code_index: 0, name: 'code', data: 'Y2xhc3MgU29sdXRpb246CiAgICBkZWYgc2ltcGxpZnlQYXRoKHNlbGYsIHBhdGg6IHN0cikgLT4gc3RyOgo=' }
      ],
      test: [
        { test_id: 0, test_index: 0, name: 'test 1', data: ['/home/'] },
        { test_id: 1, test_index: 1, name: 'test 2', data: ['/home//foo/'] },
        { test_id: 2, test_index: 2, name: 'Test 3', data: ['/home/user/Documents/../Pictures'] },
        { test_id: 3, test_index: 3, name: 'Test 4', data: ['/../'] },
        { test_id: 4, test_index: 4, name: 'Test 5', data: ['/.../a/../b/c/../d/./'] },
      ],
      solutions: [
        { solution_id: 0, solution_index: 0, name: 'Solution', func: 'simplifyPath', data: 'Y2xhc3MgU29sdXRpb246CiAgICBkZWYgc2ltcGxpZnlQYXRoKHNlbGYsIHBhdGg6IHN0cikgLT4gc3RyOgoKICAgICAgICAjIEluaXRpYWxpemUgYSBzdGFjawogICAgICAgIHN0YWNrID0gW10KCiAgICAgICAgIyBTcGxpdCB0aGUgaW5wdXQgc3RyaW5nIG9uICIvIiBhcyB0aGUgZGVsaW1pdGVyCiAgICAgICAgIyBhbmQgcHJvY2VzcyBlYWNoIHBvcnRpb24gb25lIGJ5IG9uZQogICAgICAgIGZvciBwb3J0aW9uIGluIHBhdGguc3BsaXQoIi8iKToKCiAgICAgICAgICAgICMgSWYgdGhlIGN1cnJlbnQgY29tcG9uZW50IGlzIGEgIi4uIiwgdGhlbgogICAgICAgICAgICAjIHdlIHBvcCBhbiBlbnRyeSBmcm9tIHRoZSBzdGFjayBpZiBpdCdzIG5vbi1lbXB0eQogICAgICAgICAgICBpZiBwb3J0aW9uID09ICIuLiI6CiAgICAgICAgICAgICAgICBpZiBzdGFjazoKICAgICAgICAgICAgICAgICAgICBzdGFjay5wb3AoKQogICAgICAgICAgICBlbGlmIHBvcnRpb24gPT0gIi4iIG9yIG5vdCBwb3J0aW9uOgogICAgICAgICAgICAgICAgIyBBIG5vLW9wIGZvciBhICIuIiBvciBhbiBlbXB0eSBzdHJpbmcKICAgICAgICAgICAgICAgIGNvbnRpbnVlCiAgICAgICAgICAgIGVsc2U6CiAgICAgICAgICAgICAgICAjIEZpbmFsbHksIGEgbGVnaXRpbWF0ZSBkaXJlY3RvcnkgbmFtZSwgc28gd2UgYWRkIGl0CiAgICAgICAgICAgICAgICAjIHRvIG91ciBzdGFjawogICAgICAgICAgICAgICAgc3RhY2suYXBwZW5kKHBvcnRpb24pCgogICAgICAgICMgU3RpY2ggdG9nZXRoZXIgYWxsIHRoZSBkaXJlY3RvcnkgbmFtZXMgdG9nZXRoZXIKICAgICAgICBmaW5hbF9zdHIgPSAiLyIgKyAiLyIuam9pbihzdGFjaykKICAgICAgICByZXR1cm4gZmluYWxfc3RyCg=='}
      ]
    }
  },
  {
    problem_id: 17,
    problem_index: 1,
    content: {
      markdown: [
        { markdown_id: 0, markdown_index: 0, name: 'description', data: 'R2l2ZW4gYSBzdHJpbmcgcyBvZiBsb3dlciBhbmQgdXBwZXIgY2FzZSBFbmdsaXNoIGxldHRlcnMuCgpBIGdvb2Qgc3RyaW5nIGlzIGEgc3RyaW5nIHdoaWNoIGRvZXNuJ3QgaGF2ZSB0d28gYWRqYWNlbnQgY2hhcmFjdGVycyBzW2ldIGFuZCBzW2kgKyAxXSB3aGVyZToKCjAgPD0gaSA8PSBzLmxlbmd0aCAtIDIKc1tpXSBpcyBhIGxvd2VyLWNhc2UgbGV0dGVyIGFuZCBzW2kgKyAxXSBpcyB0aGUgc2FtZSBsZXR0ZXIgYnV0IGluIHVwcGVyLWNhc2Ugb3IgdmljZS12ZXJzYS4KVG8gbWFrZSB0aGUgc3RyaW5nIGdvb2QsIHlvdSBjYW4gY2hvb3NlIHR3byBhZGphY2VudCBjaGFyYWN0ZXJzIHRoYXQgbWFrZSB0aGUgc3RyaW5nIGJhZCBhbmQgcmVtb3ZlIHRoZW0uIFlvdSBjYW4ga2VlcCBkb2luZyB0aGlzIHVudGlsIHRoZSBzdHJpbmcgYmVjb21lcyBnb29kLgoKUmV0dXJuIHRoZSBzdHJpbmcgYWZ0ZXIgbWFraW5nIGl0IGdvb2QuIFRoZSBhbnN3ZXIgaXMgZ3VhcmFudGVlZCB0byBiZSB1bmlxdWUgdW5kZXIgdGhlIGdpdmVuIGNvbnN0cmFpbnRzLgoKTm90aWNlIHRoYXQgYW4gZW1wdHkgc3RyaW5nIGlzIGFsc28gZ29vZC4K' }
      ],
      code: [
        { code_id: 0, code_index: 0, name: 'code', data: 'Y2xhc3MgU29sdXRpb246CiAgICBkZWYgbWFrZUdvb2Qoc2VsZiwgczogc3RyKSAtPiBzdHI6Cg==' }
      ],
      test: [
        { test_id: 0, test_index: 0, name: 'test 1', data: ['leEeetcode'] },
        { test_id: 1, test_index: 1, name: 'test 2', data: ['abBAcC'] },
        { test_id: 2, test_index: 2, name: 'Test 3', data: ['s'] }
      ],
      solutions: [
        { solution_id: 0, solution_index: 0, name: 'Solution', func: 'makeGood', data: 'Y2xhc3MgU29sdXRpb246CiAgICBkZWYgbWFrZUdvb2Qoc2VsZiwgczogc3RyKSAtPiBzdHI6CiAgICAgICAgIyBpZiBzIGhhcyBsZXNzIHRoYW4gMiBjaGFyYWN0ZXJzLCB3ZSBqdXN0IHJldHVybiBpdHNlbGYuCiAgICAgICAgd2hpbGUgbGVuKHMpID4gMToKICAgICAgICAgICAgIyAnZmluZCcgcmVjb3JkcyBpZiB3ZSBmaW5kIGFueSBwYWlyIHRvIHJlbW92ZS4KICAgICAgICAgICAgZmluZCA9IEZhbHNlCiAgICAgICAgICAgIAogICAgICAgICAgICAjIENoZWNrIGV2ZXJ5IHR3byBhZGphY2VudCBjaGFyYWN0ZXJzLCBjdXJyX2NoYXIgYW5kIG5leHRfY2hhci4KICAgICAgICAgICAgZm9yIGkgaW4gcmFuZ2UobGVuKHMpIC0gMSk6CiAgICAgICAgICAgICAgICBjdXJyX2NoYXIsIG5leHRfY2hhciA9IHNbaV0sIHNbaSArIDFdCiAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICMgSWYgdGhleSBtYWtlIGEgcGFpciwgcmVtb3ZlIHRoZW0gZnJvbSAncycgYW5kIGxldCAnZmluZCA9IFRydWUnLgogICAgICAgICAgICAgICAgaWYgYWJzKG9yZChjdXJyX2NoYXIpIC0gb3JkKG5leHRfY2hhcikpID09IDMyOgogICAgICAgICAgICAgICAgICAgIHMgPSBzWzppXSArIHNbaSArIDI6XQogICAgICAgICAgICAgICAgICAgIGZpbmQgPSBUcnVlCiAgICAgICAgICAgICAgICAgICAgYnJlYWsKICAgICAgICAgICAgCiAgICAgICAgICAgICMgSWYgd2UgY2Fubm90IGZpbmQgYW55IHBhaXIgdG8gcmVtb3ZlLCBicmVhayB0aGUgbG9vcC4gCiAgICAgICAgICAgIGlmIG5vdCBmaW5kOgogICAgICAgICAgICAgICAgYnJlYWsKICAgICAgICByZXR1cm4gcwo='}
      ]
    }
  },
  {
    problem_id: 18,
    problem_index: 1,
    content: {
      markdown: [
        { markdown_id: 0, markdown_index: 0, name: 'description', data: 'R2l2ZW4gYSBzdHJlYW0gb2YgaW50ZWdlcnMgYW5kIGEgd2luZG93IHNpemUsIGNhbGN1bGF0ZSB0aGUgbW92aW5nIGF2ZXJhZ2Ugb2YgYWxsIGludGVnZXJzIGluIHRoZSBzbGlkaW5nIHdpbmRvdy4KCkltcGxlbWVudCB0aGUgTW92aW5nQXZlcmFnZSBjbGFzczoKCk1vdmluZ0F2ZXJhZ2UoaW50IHNpemUpIEluaXRpYWxpemVzIHRoZSBvYmplY3Qgd2l0aCB0aGUgc2l6ZSBvZiB0aGUgd2luZG93IHNpemUuCmRvdWJsZSBuZXh0KGludCB2YWwpIFJldHVybnMgdGhlIG1vdmluZyBhdmVyYWdlIG9mIHRoZSBsYXN0IHNpemUgdmFsdWVzIG9mIHRoZSBzdHJlYW0uCg==' }
      ],
      code: [
        { code_id: 0, code_index: 0, name: 'code', data: 'Y2xhc3MgU29sdXRpb246CgogICAgZGVmIF9faW5pdF9fKHNlbGYsIHNpemU6IGludCk6CiAgICAgICAgCgogICAgZGVmIG5leHQoc2VsZiwgdmFsOiBpbnQpIC0+IGZsb2F0OgogICAgICAgIAoKCiMgWW91ciBNb3ZpbmdBdmVyYWdlIG9iamVjdCB3aWxsIGJlIGluc3RhbnRpYXRlZCBhbmQgY2FsbGVkIGFzIHN1Y2g6CiMgb2JqID0gTW92aW5nQXZlcmFnZShzaXplKQojIHBhcmFtXzEgPSBvYmoubmV4dCh2YWwpCg==' }
      ],
      test: [
        { test_id: 0, test_index: 0, name: 'test 1', data: ['["MovingAverage", "next", "next", "next", "next"],[[3], [1], [10], [3], [5]]'] }
      ],
      solutions: [
        { solution_id: 0, solution_index: 0, name: 'Solution', func: 'next', data: 'Y2xhc3MgTW92aW5nQXZlcmFnZToKICAgIGRlZiBfX2luaXRfXyhzZWxmLCBzaXplOiBpbnQpOgogICAgICAgIHNlbGYuc2l6ZSA9IHNpemUKICAgICAgICBzZWxmLnF1ZXVlID0gWzBdICogc2VsZi5zaXplCiAgICAgICAgc2VsZi5oZWFkID0gc2VsZi53aW5kb3dfc3VtID0gMAogICAgICAgICMgbnVtYmVyIG9mIGVsZW1lbnRzIHNlZW4gc28gZmFyCiAgICAgICAgc2VsZi5jb3VudCA9IDAKCiAgICBkZWYgbmV4dChzZWxmLCB2YWw6IGludCkgLT4gZmxvYXQ6CiAgICAgICAgc2VsZi5jb3VudCArPSAxCiAgICAgICAgIyBjYWxjdWxhdGUgdGhlIG5ldyBzdW0gYnkgc2hpZnRpbmcgdGhlIHdpbmRvdwogICAgICAgIHRhaWwgPSAoc2VsZi5oZWFkICsgMSkgJSBzZWxmLnNpemUKICAgICAgICBzZWxmLndpbmRvd19zdW0gPSBzZWxmLndpbmRvd19zdW0gLSBzZWxmLnF1ZXVlW3RhaWxdICsgdmFsCiAgICAgICAgIyBtb3ZlIG9uIHRvIHRoZSBuZXh0IGhlYWQKICAgICAgICBzZWxmLmhlYWQgPSAoc2VsZi5oZWFkICsgMSkgJSBzZWxmLnNpemUKICAgICAgICBzZWxmLnF1ZXVlW3NlbGYuaGVhZF0gPSB2YWwKICAgICAgICByZXR1cm4gc2VsZi53aW5kb3dfc3VtIC8gbWluKHNlbGYuc2l6ZSwgc2VsZi5jb3VudCkK'}
      ]
    }
  },
  {
    problem_id: 19,
    problem_index: 1,
    content: {
      markdown: [
        { markdown_id: 0, markdown_index: 0, name: 'description', data: 'VGhlIG5leHQgZ3JlYXRlciBlbGVtZW50IG9mIHNvbWUgZWxlbWVudCB4IGluIGFuIGFycmF5IGlzIHRoZSBmaXJzdCBncmVhdGVyIGVsZW1lbnQgdGhhdCBpcyB0byB0aGUgcmlnaHQgb2YgeCBpbiB0aGUgc2FtZSBhcnJheS4KCllvdSBhcmUgZ2l2ZW4gdHdvIGRpc3RpbmN0IDAtaW5kZXhlZCBpbnRlZ2VyIGFycmF5cyBudW1zMSBhbmQgbnVtczIsIHdoZXJlIG51bXMxIGlzIGEgc3Vic2V0IG9mIG51bXMyLgoKRm9yIGVhY2ggMCA8PSBpIDwgbnVtczEubGVuZ3RoLCBmaW5kIHRoZSBpbmRleCBqIHN1Y2ggdGhhdCBudW1zMVtpXSA9PSBudW1zMltqXSBhbmQgZGV0ZXJtaW5lIHRoZSBuZXh0IGdyZWF0ZXIgZWxlbWVudCBvZiBudW1zMltqXSBpbiBudW1zMi4gSWYgdGhlcmUgaXMgbm8gbmV4dCBncmVhdGVyIGVsZW1lbnQsIHRoZW4gdGhlIGFuc3dlciBmb3IgdGhpcyBxdWVyeSBpcyAtMS4KClJldHVybiBhbiBhcnJheSBhbnMgb2YgbGVuZ3RoIG51bXMxLmxlbmd0aCBzdWNoIHRoYXQgYW5zW2ldIGlzIHRoZSBuZXh0IGdyZWF0ZXIgZWxlbWVudCBhcyBkZXNjcmliZWQgYWJvdmUuCg==' }
      ],
      code: [
        { code_id: 0, code_index: 0, name: 'code', data: 'Y2xhc3MgU29sdXRpb246CiAgICBkZWYgbmV4dEdyZWF0ZXJFbGVtZW50KHNlbGYsIG51bXMxOiBMaXN0W2ludF0sIG51bXMyOiBMaXN0W2ludF0pIC0+IExpc3RbaW50XToK' }
      ],
      test: [
        { test_id: 0, test_index: 0, name: 'test 1', data: ['[4,1,2],[1,3,4,2]'] },
        { test_id: 1, test_index: 1, name: 'test 2', data: ['[2,4],[1,2,3,4]'] }
      ],
      solutions: [
        { solution_id: 0, solution_index: 0, name: 'Solution', func: 'nextGreaterElement', data: 'Y2xhc3MgU29sdXRpb246CiAgICBkZWYgbmV4dEdyZWF0ZXJFbGVtZW50KHNlbGYsIG51bXMxLCBudW1zMik6CiAgICAgICAgc3RhY2sgPSBbXQogICAgICAgIGhhc2htYXAgPSB7fQoKICAgICAgICBmb3IgbnVtIGluIG51bXMyOgogICAgICAgICAgICB3aGlsZSBzdGFjayBhbmQgbnVtID4gc3RhY2tbLTFdOgogICAgICAgICAgICAgICAgaGFzaG1hcFtzdGFjay5wb3AoKV0gPSBudW0KICAgICAgICAgICAgc3RhY2suYXBwZW5kKG51bSkKCiAgICAgICAgd2hpbGUgc3RhY2s6CiAgICAgICAgICAgIGhhc2htYXBbc3RhY2sucG9wKCldID0gLTEKCiAgICAgICAgcmV0dXJuIFtoYXNobWFwLmdldChpLCAtMSkgZm9yIGkgaW4gbnVtczFdCg=='}
      ]
    }
  },
  {
    problem_id: 20,
    problem_index: 1,
    content: {
      markdown: [
        { markdown_id: 0, markdown_index: 0, name: 'description', data: 'RGVzaWduIGFuIGFsZ29yaXRobSB0aGF0IGNvbGxlY3RzIGRhaWx5IHByaWNlIHF1b3RlcyBmb3Igc29tZSBzdG9jayBhbmQgcmV0dXJucyB0aGUgc3BhbiBvZiB0aGF0IHN0b2NrJ3MgcHJpY2UgZm9yIHRoZSBjdXJyZW50IGRheS4KClRoZSBzcGFuIG9mIHRoZSBzdG9jaydzIHByaWNlIGluIG9uZSBkYXkgaXMgdGhlIG1heGltdW0gbnVtYmVyIG9mIGNvbnNlY3V0aXZlIGRheXMgKHN0YXJ0aW5nIGZyb20gdGhhdCBkYXkgYW5kIGdvaW5nIGJhY2t3YXJkKSBmb3Igd2hpY2ggdGhlIHN0b2NrIHByaWNlIHdhcyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gdGhlIHByaWNlIG9mIHRoYXQgZGF5LgoKRm9yIGV4YW1wbGUsIGlmIHRoZSBwcmljZXMgb2YgdGhlIHN0b2NrIGluIHRoZSBsYXN0IGZvdXIgZGF5cyBpcyBbNywyLDEsMl0gYW5kIHRoZSBwcmljZSBvZiB0aGUgc3RvY2sgdG9kYXkgaXMgMiwgdGhlbiB0aGUgc3BhbiBvZiB0b2RheSBpcyA0IGJlY2F1c2Ugc3RhcnRpbmcgZnJvbSB0b2RheSwgdGhlIHByaWNlIG9mIHRoZSBzdG9jayB3YXMgbGVzcyB0aGFuIG9yIGVxdWFsIDIgZm9yIDQgY29uc2VjdXRpdmUgZGF5cy4KQWxzbywgaWYgdGhlIHByaWNlcyBvZiB0aGUgc3RvY2sgaW4gdGhlIGxhc3QgZm91ciBkYXlzIGlzIFs3LDM0LDEsMl0gYW5kIHRoZSBwcmljZSBvZiB0aGUgc3RvY2sgdG9kYXkgaXMgOCwgdGhlbiB0aGUgc3BhbiBvZiB0b2RheSBpcyAzIGJlY2F1c2Ugc3RhcnRpbmcgZnJvbSB0b2RheSwgdGhlIHByaWNlIG9mIHRoZSBzdG9jayB3YXMgbGVzcyB0aGFuIG9yIGVxdWFsIDggZm9yIDMgY29uc2VjdXRpdmUgZGF5cy4KSW1wbGVtZW50IHRoZSBTdG9ja1NwYW5uZXIgY2xhc3M6CgpTdG9ja1NwYW5uZXIoKSBJbml0aWFsaXplcyB0aGUgb2JqZWN0IG9mIHRoZSBjbGFzcy4KaW50IG5leHQoaW50IHByaWNlKSBSZXR1cm5zIHRoZSBzcGFuIG9mIHRoZSBzdG9jaydzIHByaWNlIGdpdmVuIHRoYXQgdG9kYXkncyBwcmljZSBpcyBwcmljZS4K' }
      ],
      code: [
        { code_id: 0, code_index: 0, name: 'code', data: 'Y2xhc3MgU29sdXRpb246CgogICAgZGVmIF9faW5pdF9fKHNlbGYpOgogICAgICAgIAoKICAgIGRlZiBuZXh0KHNlbGYsIHByaWNlOiBpbnQpIC0+IGludDoKICAgICAgICAKCgojIFlvdXIgU3RvY2tTcGFubmVyIG9iamVjdCB3aWxsIGJlIGluc3RhbnRpYXRlZCBhbmQgY2FsbGVkIGFzIHN1Y2g6CiMgb2JqID0gU3RvY2tTcGFubmVyKCkKIyBwYXJhbV8xID0gb2JqLm5leHQocHJpY2UpCg== ' }
      ],
      test: [
        { test_id: 0, test_index: 0, name: 'test 1', data: ['["StockSpanner", "next", "next", "next", "next", "next", "next", "next"],[[], [100], [80], [60], [70], [60], [75], [85]]'] }
      ],
      solutions: [
        { solution_id: 0, solution_index: 0, name: 'Solution', func: 'next', data: 'Y2xhc3MgU29sdXRpb246CgogICAgZGVmIF9faW5pdF9fKHNlbGYpOgogICAgICAgIAoKICAgIGRlZiBuZXh0KHNlbGYsIHByaWNlOiBpbnQpIC0+IGludDoKICAgICAgICAKCgojIFlvdXIgU3RvY2tTcGFubmVyIG9iamVjdCB3aWxsIGJlIGluc3RhbnRpYXRlZCBhbmQgY2FsbGVkIGFzIHN1Y2g6CiMgb2JqID0gU3RvY2tTcGFubmVyKCkKIyBwYXJhbV8xID0gb2JqLm5leHQocHJpY2UpCg=='}
      ]
    }
  }
];
