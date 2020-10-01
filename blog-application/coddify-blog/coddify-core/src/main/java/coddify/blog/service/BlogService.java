package coddify.blog.service;

import coddify.blog.domain.BlogPost;
import coddify.blog.repository.BlogRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Optional;


public class BlogService {

    private BlogRepository blogRepository;

    public BlogService() { }

    public BlogService(BlogRepository blogRepository) {
        this.blogRepository = blogRepository;
    }

    public Page<BlogPost> findAll(Pageable pageable) {
        return blogRepository.findAll(pageable);
    }

    public Optional<BlogPost> findById(Long id) {
        return blogRepository.findById(id);
    }

    public HashMap<String, Object> createPaginationModel(Page<BlogPost> slice) {

        HashMap<String, Object> result = new HashMap<>();

        result.put("currentPage", slice.getNumber());
        result.put("totalPages", slice.getTotalPages());
        result.put("pages", getPages(slice.getNumber(), slice.getTotalPages() - 1));
        return result;
    }

    private ArrayList<Integer> getPages(int currentPage, int numberOfPages) {

        ArrayList<Integer> pages = new ArrayList<>();

        if (currentPage > 0) {
            pages.add(currentPage - 1);
        }

        pages.add(currentPage);

        if (currentPage < numberOfPages) {
            pages.add(currentPage + 1);
        }

        return pages;
    }
}
