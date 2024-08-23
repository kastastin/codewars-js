// <-- Pagination Helper -->

/*
  For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

  The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

  The following are some examples of how this class is used:

  var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
  helper.pageCount(); // should == 2
  helper.itemCount(); // should == 6
  helper.pageItemCount(0); // should == 4
  helper.pageItemCount(1); // last page - should == 2
  helper.pageItemCount(2); // should == -1 since the page is invalid

  // pageIndex takes an item index and returns the page that it belongs on
  helper.pageIndex(5); // should == 1 (zero based index)
  helper.pageIndex(2); // should == 0
  helper.pageIndex(20); // should == -1
  helper.pageIndex(-10); // should == -1
*/

// <-- My Solution -->
class PaginationHelper {
  constructor(collection, itemsPerPage) {
    let insertedArr = [];
    const doubleArr = [];

    if (itemsPerPage <= 0) return (this.doubleArr = [[...collection]]);

    for (let i = 0; i < collection.length; i++) {
      if (insertedArr.length == itemsPerPage) {
        doubleArr.push(insertedArr);
        insertedArr = [];
      }
      insertedArr.push(collection[i]);
    }

    if (insertedArr.length) doubleArr.push(insertedArr);

    this.doubleArr = doubleArr;
  }

  itemCount() {
    // returns the number of items within the entire collection
    if (this.doubleArr.length === 0) return 0;
    if (this.doubleArr.length === 1) return this.doubleArr[0].length;

    return (
      (this.doubleArr.length - 1) * this.doubleArr[0].length +
      this.doubleArr[this.doubleArr.length - 1].length
    );
  }

  pageCount() {
    return this.doubleArr.length;
  }

  pageItemCount(pageIndex) {
    const elemToFind = this.doubleArr.find((item, index) => index == pageIndex);

    if (!elemToFind) return -1;

    return elemToFind.length;
  }

  pageIndex(itemIndex) {
    const itemCount = this.itemCount();
    const pageCount = this.pageCount();

    if (pageCount == 0) return -1;
    if (!this.doubleArr[0].length) return -1;
    if (itemIndex > itemCount - 1 || itemIndex < 0) return -1;

    const firstPageLength = this.doubleArr[0].length;

    return Math.floor(itemIndex / firstPageLength);
  }
}

// <-- Best Solution -->
class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }

  itemCount() {
    return this.collection.length;
  }

  pageCount() {
    return (
      parseInt(this.collection.length / this.itemsPerPage) +
      (this.collection.length % this.itemsPerPage > 0 ? 1 : 0)
    );
  }

  pageItemCount(pageIndex) {
    return this.pageCount() <= pageIndex || pageIndex < 0
      ? -1
      : this.pageCount() - 1 != pageIndex
      ? this.itemsPerPage
      : this.collection.length % this.itemsPerPage > 0
      ? this.collection.length % this.itemsPerPage
      : this.itemsPerPage;
  }

  pageIndex(itemIndex) {
    return itemIndex < 0 || itemIndex >= this.itemCount()
      ? -1
      : parseInt(itemIndex / this.itemsPerPage);
  }
}
